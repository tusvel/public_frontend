import {
  type ArticleDetailsCommentsSchema,
  type ArticleDetailsRecommendationSchema,
} from '../../../ArticleDetailsPage';

export type ArticleDetailsPageSchema = {
  comments: ArticleDetailsCommentsSchema;
  recommendations: ArticleDetailsRecommendationSchema;
};
