import { type HTMLAttributeAnchorTarget, memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleList.module.scss';
import { type Article } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSeleton';
import { useTranslation } from 'react-i18next';
import { Text, TextSize } from '@/shared/ui/Text/Text';
import { ArticleView } from '../../model/consts/articleConsts';

type ArticleListProps = {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleView;
  target?: HTMLAttributeAnchorTarget;
};

const getSkeletons = (view: ArticleView) =>
  new Array(view === ArticleView.SMALL ? 9 : 3)
    .fill(0)
    .map((_, index) => (
      <ArticleListItemSkeleton className={cls.card} key={index} view={view} />
    ));

export const ArticleList = memo((props: ArticleListProps) => {
  const {
    className,
    view = ArticleView.SMALL,
    articles,
    isLoading,
    target,
  } = props;
  const { t } = useTranslation();

  if (!isLoading && !articles.length) {
    return (
      <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
        <Text title={t('Статьи не найдены')} size={TextSize.L} />
      </div>
    );
  }

  return (
    <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
      {articles.map((item) => (
        <ArticleListItem
          key={item.id}
          view={view}
          article={item}
          target={target}
        />
      ))}
      {isLoading && getSkeletons(view)}
    </div>
  );
});
