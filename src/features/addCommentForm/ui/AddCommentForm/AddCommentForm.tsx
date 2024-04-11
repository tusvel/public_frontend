import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AddCommentForm.module.scss';
import {
  DynamicModuleLoader,
  type ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
  addCommentFormReducer,
  useCommentFormActions,
} from '../../model/slice/addCommentFormSlice';
import { useSelector } from 'react-redux';
import {
  getAddCommentFormError,
  getAddCommentFormText,
} from '../../model/selectors/addCommentFormSelectors';
import { Input } from '@/shared/ui/Input';
import { useTranslation } from 'react-i18next';
import { Button } from '@/shared/ui/Button';
import { HStack } from '@/shared/ui/Stack';

export type AddCommentFormProps = {
  className?: string;
  onSendComment: (text: string) => void;
};

const reducers: ReducersList = {
  addCommentForm: addCommentFormReducer,
};

const AddCommentForm = memo((props: AddCommentFormProps) => {
  const { className, onSendComment } = props;
  const { t } = useTranslation();
  const text = useSelector(getAddCommentFormText);
  const error = useSelector(getAddCommentFormError);
  const { setText } = useCommentFormActions();

  const onCommentTextChange = useCallback(
    (value: string) => {
      setText(value);
    },
    [setText],
  );

  const onSendHandler = useCallback(() => {
    onSendComment(text || '');
    onCommentTextChange('');
  }, [onCommentTextChange, onSendComment, text]);

  return (
    <DynamicModuleLoader reducers={reducers}>
      <HStack
        max
        justify="between"
        className={classNames(cls.AddCommentForm, {}, [className])}
      >
        <Input
          value={text}
          onChange={onCommentTextChange}
          placeholder={t('Введите текст комментария')}
          className={cls.input}
        />
        <Button onClick={onSendHandler}>{t('Отправить')}</Button>
      </HStack>
    </DynamicModuleLoader>
  );
});

export default AddCommentForm;
