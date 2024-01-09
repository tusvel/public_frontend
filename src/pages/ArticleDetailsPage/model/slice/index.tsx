import { combineReducers } from '@reduxjs/toolkit';
import { type ArticleDetailsPageSchema } from '../types';
import { articleDetailsCommentsReducer } from './articleDetailsCommentSlice';
import { articleDetailsPageRecommendationsReducer } from './articleDetailsPageRecommendationsSlice';

export const articleDetailsPageReducer =
  combineReducers<ArticleDetailsPageSchema>({
    recommendations: articleDetailsPageRecommendationsReducer,
    comments: articleDetailsCommentsReducer,
  });
