import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { ArticleList } from 'entities/Article';
import { useArticleRecommendationsList } from '../../api/articleRecommendationsListApi';

type ArticleRecommendationsListProps = {
  className?: string;
};

export const ArticleRecommendationsList = memo(
  (props: ArticleRecommendationsListProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const {
      data: articles,
      isLoading,
      error,
    } = useArticleRecommendationsList(3);

    if (isLoading || error || !articles) {
      return null;
    }

    return (
      <div className={className}>
        <Text size={TextSize.L} title={t('Рекомендуем')} />
        <ArticleList
          articles={articles}
          isLoading={isLoading}
          target="_blank"
        />
      </div>
    );
  },
);
