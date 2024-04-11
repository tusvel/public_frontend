import { type PayloadAction } from '@reduxjs/toolkit';
import { type ArticleDetailsSchema } from '../types/articleDetailsSchema';
import { type Article } from '../types/article';
import { fetchArticleById } from '../services/fetchArticleById';
import { buildSlice } from '@/shared/lib/store';

const initialState: ArticleDetailsSchema = {
  isLoading: false,
  error: undefined,
  data: undefined,
};

export const articleDetailsSlice = buildSlice({
  name: 'article',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchArticleById.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(
        fetchArticleById.fulfilled,
        (state, action: PayloadAction<Article>) => {
          state.isLoading = false;
          state.data = action.payload;
        },
      )
      .addCase(fetchArticleById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const {
  actions: ArticleDetailsActions,
  reducer: ArticleDetailsReducer,
  useActions: useArticleActions,
} = articleDetailsSlice;
