import { type FC, type PropsWithChildren } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from '@/shared/ui/Button/Button';

type PageErrorProps = {
  className?: string;
};

export const PageError: FC<PageErrorProps & PropsWithChildren> = (props) => {
  const { className, children } = props;
  const { t } = useTranslation();

  const onClickReload = () => {
    location.reload();
  };

  return (
    <div className={classNames('', {}, [className])}>
      {children}
      {t('Произошла ошибка')}
      <Button onClick={onClickReload}>{t('Обновить страницу')}</Button>
    </div>
  );
};
