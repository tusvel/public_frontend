import { type EntityState } from '@reduxjs/toolkit';
import { type Comment } from 'entities/Comment';

export type ArticleDetailsCommentsSchema = {
  isLoading?: boolean;
  error?: string;
} & EntityState<Comment>;
