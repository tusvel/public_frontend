import { createSlice } from '@reduxjs/toolkit';
import { type ArticleRecommendationsListSchema } from '../types/ArticleRecommendationsListSchema';

const initialState: ArticleRecommendationsListSchema = {};

export const ArticleRecommendationsListSlice = createSlice({
  name: 'ArticleRecommendationsList',
  initialState,
  reducers: {},
});

export const { actions: ArticleRecommendationsListActions } =
  ArticleRecommendationsListSlice;
export const { reducer: ArticleRecommendationsListReducer } =
  ArticleRecommendationsListSlice;
