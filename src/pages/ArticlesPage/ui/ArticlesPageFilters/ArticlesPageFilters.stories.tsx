import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { ArticlesPageFilters } from './ArticlesPageFilters';
import { Theme } from '@/shared/const/theme';

const meta = {
  title: 'pages/ArticlesPageFilters',
  component: ArticlesPageFilters,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ArticlesPageFilters>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};

export const PrimaryDark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};
