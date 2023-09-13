import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './CommentList.module.scss';
import { type Comment } from '../../model/types/comment';
import { CommentCard } from '../CommentCard/CommentCard';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';

type CommentListProps = {
  className?: string;
  comments?: Comment[];
  isLoading?: boolean;
};

export const CommentList = memo((props: CommentListProps) => {
  const { className, comments, isLoading } = props;
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.CommentList, {}, [className])}>
      {comments?.length ? (
        comments.map((comment) => {
          console.log(comment, 'comment');
          return (
            <CommentCard
              isLoading={isLoading}
              comment={comment}
              key={comment.id}
            />
          );
        })
      ) : (
        <Text text={t('Комментарии отсутствуют')} />
      )}
    </div>
  );
});
