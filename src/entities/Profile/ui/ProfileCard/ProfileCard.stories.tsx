import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ProfileCard } from './ProfileCard';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

const meta = {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
  decorators: [StoreDecorator({})],
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})],
};
