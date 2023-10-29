import { createAsyncThunk } from '@reduxjs/toolkit';
import { type ThunkConfig } from 'app/providers/StoreProvider';
import {
  getArticlesPageHasMore,
  getArticlesPageIsLoading,
  getArticlesPageNum,
} from '../../selectors/articlesPageSelectors';
import { articlesPagesActions } from '../../slices/articlesPageSlice';
import { fetchArticles } from '../fetchArticlesList/fetchArticlesList';

export const fetchNextArticlesPage = createAsyncThunk<
  void,
  void,
  ThunkConfig<string>
>('articleDetailsPage/fetchNextArticlesPage', async (_, thunkAPI) => {
  const { getState, dispatch } = thunkAPI;
  const hasMore = getArticlesPageHasMore(getState());
  const page = getArticlesPageNum(getState());
  const isLoading = getArticlesPageIsLoading(getState());

  if (hasMore && !isLoading) {
    void dispatch(articlesPagesActions.setPage(page + 1));
    void dispatch(
      fetchArticles({
        page: page + 1,
      }),
    );
  }
});
