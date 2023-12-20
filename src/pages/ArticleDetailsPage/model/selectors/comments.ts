import { type StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const getArticleCommentsIsLoading = (state: StateSchema) =>
  state.articleDetailsPage?.comments?.isLoading;

export const getArticleCommentsError = (state: StateSchema) =>
  state.articleDetailsPage?.recommendations?.error;
