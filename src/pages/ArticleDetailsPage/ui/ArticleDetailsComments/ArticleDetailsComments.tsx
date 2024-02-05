import { Suspense, useCallback, useEffect } from 'react';
import cls from './ArticleDetailsComments.module.scss';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { AddCommentForm } from 'features/addCommentForm';
import { CommentList } from 'entities/Comment';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getArticleComments } from '../../model/slice/articleDetailsCommentSlice';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { VStack } from 'shared/ui/Stack';

type ArticleDetailsCommentsProps = {
  className?: string;
  id?: string;
};

export const ArticleDetailsComments = (props: ArticleDetailsCommentsProps) => {
  const { className, id } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const comments = useSelector(getArticleComments.selectAll);
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading);

  const onSendComment = useCallback(
    (text: string) => {
      void dispatch(addCommentForArticle(text));
    },
    [dispatch],
  );

  useEffect(() => {
    void dispatch(fetchCommentsByArticleId(id));
  }, [dispatch, id]);

  return (
    <VStack gap={'16'} max className={className}>
      <Text
        size={TextSize.L}
        className={cls.commentTitle}
        title={t('Комментарии')}
      />
      <Suspense fallback={'...'}>
        <AddCommentForm onSendComment={onSendComment} />
      </Suspense>
      <CommentList isLoading={commentsIsLoading} comments={comments} />
    </VStack>
  );
};
