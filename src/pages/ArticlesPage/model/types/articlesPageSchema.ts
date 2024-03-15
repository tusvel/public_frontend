import {
  type Article,
  type ArticleSortField,
  type ArticleView,
} from '@/entities/Article';
import { type EntityState } from '@reduxjs/toolkit';
import { type SortOrder } from '@/shared/types/sort';

import { type ArticleType } from '@/entities/Article/model/consts/articleConsts';

export type ArticlesPageSchema = {
  isLoading?: boolean;
  error?: string;

  // pagination
  page: number;
  limit: number;
  hasMore: boolean;
  // filters -- эта часть отвечает за фильтры, за отобржения, за сортировку.
  view: ArticleView;
  order: SortOrder;
  sort: ArticleSortField;
  search: string;
  type: ArticleType;

  _inited: boolean;
} & EntityState<Article>;
