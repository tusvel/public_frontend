import { rtkApi } from '@/shared/api/rtkApi';
import { type Rating } from '@/entities/Rating';

type GetArticleRatingArg = {
  articleId: string;
  userId: string;
};

type RateArticleArg = {
  userId: string;
  articleId: string;
  rate: number;
  feedback?: string;
};

const articleRatingApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getArticleRating: build.query<Rating[], GetArticleRatingArg>({
      query: ({ articleId, userId }) => ({
        url: '/article-ratings',
        params: {
          articleId,
          userId,
        },
      }),
    }),
    rateArticle: build.mutation<void, RateArticleArg>({
      query: (arg) => ({
        url: '/article-ratings',
        method: 'POST',
        body: arg,
      }),
    }),
  }),
});

export const useArticleRating = articleRatingApi.useGetArticleRatingQuery;
export const useRateArticle = articleRatingApi.useRateArticleMutation;
