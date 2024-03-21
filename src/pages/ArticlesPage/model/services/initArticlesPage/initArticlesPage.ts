import { createAsyncThunk } from '@reduxjs/toolkit';
import { type ThunkConfig } from '@/app/providers/StoreProvider';
import { getArticlesPageInited } from '../../selectors/articlesPageSelectors';
import { articlesPagesActions } from '../../slices/articlesPageSlice';
import { fetchArticles } from '../fetchArticlesList/fetchArticlesList';
import { type ArticleSortField, type ArticleType } from '@/entities/Article';
import { type SortOrder } from '@/shared/types/sort';

export const initArticlesPage = createAsyncThunk<
  void,
  URLSearchParams,
  ThunkConfig<string>
>('articlesPage/initArticlesPage', async (searchParams, thunkAPI) => {
  const { getState, dispatch } = thunkAPI;
  const inited = getArticlesPageInited(getState());

  if (!inited) {
    const orderFromUrl = searchParams.get('order') as SortOrder;
    const sortFromUrl = searchParams.get('sort') as ArticleSortField;
    const searchFromUrl = searchParams.get('search');
    const typeFromUrl = searchParams.get('type') as ArticleType;

    if (orderFromUrl) {
      dispatch(articlesPagesActions.setOrder(orderFromUrl));
    }

    if (sortFromUrl) {
      dispatch(articlesPagesActions.setSort(sortFromUrl));
    }

    if (searchFromUrl) {
      dispatch(articlesPagesActions.setSearch(searchFromUrl));
    }

    if (typeFromUrl) {
      dispatch(articlesPagesActions.setType(typeFromUrl));
    }

    void dispatch(articlesPagesActions.initState());
    void dispatch(fetchArticles({}));
  }
});
