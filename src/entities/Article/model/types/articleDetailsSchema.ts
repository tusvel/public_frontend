import { type Article } from './article';

export type ArticleDetailsSchema = {
  isLoading: boolean;
  error?: string;
  data?: Article;
};
