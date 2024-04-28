import type { Meta, StoryObj } from '@storybook/react';
import ArticlesPage from './ArticlesPage';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { Theme } from '@/shared/const/theme';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { type Article, ArticleType } from '@/entities/Article';
import { UserRole } from '@/entities/User';

const meta = {
  title: 'pages/ArticlesPage',
  component: ArticlesPage,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ArticlesPage>;

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

const parameters = {
  mockData: [
    {
      url:
        __API__ +
        '/articles?_expand=user&_limit=9&_page=2&_sort=createdAt&_order=asc&q=',
      method: 'GET',
      status: 200,
      response: [
        { ...article },
        { ...article, id: '2' },
        { ...article, id: '3' },
      ],
    },
  ],
};

export const Primary: Story = {
  args: {},
  decorators: [StoreDecorator({})],
  parameters,
};

export const PrimaryDark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})],
  parameters,
};
