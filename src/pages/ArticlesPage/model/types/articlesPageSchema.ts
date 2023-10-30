import { type Article, type ArticleView } from 'entities/Article';
import { type EntityState } from '@reduxjs/toolkit';

export type ArticlesPageSchema = {
  isLoading?: boolean;
  error?: string;

  view: ArticleView;
  // pagination
  page: number;
  limit?: number;
  hasMore: boolean;

  _inited: boolean;
} & EntityState<Article>;
