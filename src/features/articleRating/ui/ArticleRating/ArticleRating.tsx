import { memo, useCallback } from 'react';
import { RatingCard } from '@/entities/Rating';
import { useTranslation } from 'react-i18next';
import { useArticleRating, useRateArticle } from '../../api/articleRatingApi';
import { getUserAuthData } from '@/entities/User';
import { useSelector } from 'react-redux';
import { Skeleton } from '@/shared/ui/Skeleton';

type ArticleRatingProps = {
  className?: string;
  articleId: string;
};

export const ArticleRating = memo((props: ArticleRatingProps) => {
  const { className, articleId } = props;
  const { t } = useTranslation();
  const userData = useSelector(getUserAuthData);
  const { data, isLoading } = useArticleRating({
    articleId,
    userId: userData?.id ?? '',
  });
  const [rateArticleMutation] = useRateArticle();

  const handleRateArticle = useCallback(
    (rate: number, feedback?: string) => {
      try {
        void rateArticleMutation({
          articleId,
          userId: userData?.id || '',
          rate,
          feedback,
        });
      } catch (e) {
        console.log(e, 'err');
      }
    },
    [articleId, rateArticleMutation, userData?.id],
  );

  const onAccept = useCallback(
    (rate: number, feedback?: string) => {
      handleRateArticle(rate, feedback);
    },
    [handleRateArticle],
  );

  const onCancel = useCallback(
    (rate: number) => {
      handleRateArticle(rate);
    },
    [handleRateArticle],
  );

  if (isLoading) return <Skeleton width={'100%'} height={80} />;

  const rating = data?.[0];

  return (
    <RatingCard
      onAccept={onAccept}
      onCancel={onCancel}
      rate={rating?.rate}
      title={rating?.rate ? t('Спасибо за оценку!') : t('Оцените статью')}
      feedbackTitle={t(
        'Оставьте свой отзыв о статье, это поможет улучшить качество',
      )}
      hasFeedback
      className={className}
    />
  );
});
