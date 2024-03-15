import { rtkApi } from '@/shared/api/rtkApi';
import type { Article } from '@/entities/Article';

const articleApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getArticleRecommendationsList: build.query<Article[], number>({
      query: (limit) => ({
        url: '/articles',
        params: {
          _limit: limit,
        },
      }),
    }),
  }),
});

export const useArticleRecommendationsList =
  articleApi.useGetArticleRecommendationsListQuery;
