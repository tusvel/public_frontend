import {
  type ArticleDetailsCommentsSchema,
  type ArticleDetailsRecommendationSchema,
} from 'pages/ArticleDetailsPage';

export type ArticleDetailsPageSchema = {
  comments: ArticleDetailsCommentsSchema;
  recommendations: ArticleDetailsRecommendationSchema;
};
