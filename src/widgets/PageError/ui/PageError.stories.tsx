import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { PageError } from './PageError';
import { Theme } from '@/shared/const/theme';

const meta = {
  title: 'widgets/PageError',
  component: PageError,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof PageError>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};
