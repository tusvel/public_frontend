import { memo } from 'react';
import { ArticleList } from '@/entities/Article';
import { useSelector } from 'react-redux';
import { getArticles } from '../../model/slices/articlesPageSlice';
import {
  getArticlesPageIsLoading,
  getArticlesPageView,
} from '../../model/selectors/articlesPageSelectors';

type ArticleInfiniteListProps = {
  className?: string;
};

export const ArticleInfiniteList = memo((props: ArticleInfiniteListProps) => {
  const { className } = props;
  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlesPageIsLoading);
  const view = useSelector(getArticlesPageView);

  return (
    <ArticleList
      className={className}
      view={view}
      articles={articles}
      isLoading={isLoading}
    />
  );
});
