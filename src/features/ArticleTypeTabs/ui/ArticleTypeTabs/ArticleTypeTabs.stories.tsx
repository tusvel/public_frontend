import type { Meta, StoryObj } from '@storybook/react';
import { ArticleType } from '@/entities/Article';
import { ArticleTypeTabs } from './ArticleTypeTabs';

const meta = {
  title: 'features/ArticleTypeTabs',
  component: ArticleTypeTabs,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ArticleTypeTabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    value: ArticleType.ALL,
    onChangeType: () => null,
  },
};
