import { memo, useCallback, useMemo } from 'react';
import { type TabItem, Tabs } from '@/shared/ui/Tabs';
import { useTranslation } from 'react-i18next';
import { ArticleType } from '@/entities/Article';

type ArticleTypeTabsProps = {
  className?: string;
  value: ArticleType;
  onChangeType: (type: ArticleType) => void;
};

export const ArticleTypeTabs = memo((props: ArticleTypeTabsProps) => {
  const { className, value, onChangeType } = props;
  const { t } = useTranslation();

  const typeTabs = useMemo<TabItem[]>(
    () => [
      {
        value: ArticleType.ALL,
        content: t('Все статьи'),
      },
      {
        value: ArticleType.IT,
        content: t('Айти'),
      },
      {
        value: ArticleType.SCIENCE,
        content: t('Наука'),
      },
      {
        value: ArticleType.ECONOMICS,
        content: t('Экономика'),
      },
    ],
    [t],
  );

  const onTabClick = useCallback(
    (tab: TabItem) => {
      onChangeType(tab.value as ArticleType);
    },
    [onChangeType],
  );

  return (
    <Tabs
      value={value}
      tabs={typeTabs}
      onTabClick={onTabClick}
      className={className}
    />
  );
});
