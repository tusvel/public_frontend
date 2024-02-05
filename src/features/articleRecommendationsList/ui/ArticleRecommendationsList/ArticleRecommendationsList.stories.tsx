import type { Meta, StoryObj } from '@storybook/react';
import { ArticleRecommendationsList } from './ArticleRecommendationsList';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { type Article } from 'entities/Article';
import { ArticleType } from 'entities/Article/model/types/article';
import { UserRole } from 'entities/User';

const meta = {
  title: 'features/ArticleRecommendationsList',
  component: ArticleRecommendationsList,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ArticleRecommendationsList>;

export default meta;
type Story = StoryObj<typeof meta>;

const article: Article = {
  id: '1',
  type: [ArticleType.IT],
  title: 'Title',
  img: 'https://open.spbstu.ru/wp-content/uploads/2018/09/04KOTLIN2.jpg',
  createdAt: '2024-01-02',
  views: 203,
  subtitle: 'Sub Title',
  blocks: [],
  user: {
    id: '1',
    roles: [UserRole.USER],
    username: 'admin',
    avatar: 'https://i.redd.it/pkyqko89eim41.jpg',
  },
};

export const Primary: Story = {
  args: {},
  decorators: [StoreDecorator({})],
  parameters: {
    mockData: [
      {
        url: __API__ + '/articles?_limit=3',
        method: 'GET',
        status: 200,
        response: [
          { ...article },
          { ...article, id: '2' },
          { ...article, id: '3' },
        ],
      },
    ],
  },
};
