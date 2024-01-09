import { type FC, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleSortSelector.module.scss';
import { Select, type SelectOption } from 'shared/ui/Select/Select';
import { useTranslation } from 'react-i18next';
import { ArticleSortField } from '../../model/types/article';
import { type SortOrder } from 'shared/types/sort';

type ArticleSortSelectorProps = {
  className?: string;
  sort: ArticleSortField;
  order: SortOrder;
  onChangeOrder: (newOrder: SortOrder) => void;
  onChangeSort: (newSort: ArticleSortField) => void;
};

export const ArticleSortSelector: FC<ArticleSortSelectorProps> = (props) => {
  const { className, onChangeSort, sort, onChangeOrder, order } = props;
  const { t } = useTranslation();

  const orderOptions = useMemo<Array<SelectOption<SortOrder>>>(
    () => [
      {
        value: 'asc',
        content: t('возростанию'),
      },
      {
        value: 'desc',
        content: t('убыванию'),
      },
    ],
    [t],
  );

  const sortFieldOptions = useMemo<Array<SelectOption<ArticleSortField>>>(
    () => [
      {
        value: ArticleSortField.CREATED,
        content: t('дате создания'),
      },
      {
        value: ArticleSortField.TITLE,
        content: t('названию'),
      },
      {
        value: ArticleSortField.VIEWS,
        content: t('просмотрам'),
      },
    ],
    [t],
  );

  return (
    <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
      <Select<ArticleSortField>
        value={sort}
        onChange={onChangeSort}
        options={sortFieldOptions}
        label={t('Сортировать ПО')}
      />
      <Select
        value={order}
        onChange={onChangeOrder}
        options={orderOptions}
        label={t('по')}
        className={cls.order}
      />
    </div>
  );
};
