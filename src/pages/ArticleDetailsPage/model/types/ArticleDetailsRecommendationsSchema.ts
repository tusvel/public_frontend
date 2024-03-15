import { type EntityState } from '@reduxjs/toolkit';
import { type Article } from '@/entities/Article';

export type ArticleDetailsRecommendationSchema = {
  isLoading?: boolean;
  error?: string;
} & EntityState<Article>;
