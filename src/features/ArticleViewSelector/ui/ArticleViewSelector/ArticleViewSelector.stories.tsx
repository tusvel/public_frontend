import type { Meta, StoryObj } from '@storybook/react';
import { ArticleView } from '@/entities/Article';
import { ArticleViewSelector } from './ArticleViewSelector';

const meta = {
  title: 'features/ArticleViewSelector',
  component: ArticleViewSelector,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ArticleViewSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    view: ArticleView.SMALL,
    onViewClick: () => null,
  },
};
