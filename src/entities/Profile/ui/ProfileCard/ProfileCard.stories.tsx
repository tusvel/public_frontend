import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { ProfileCard } from './ProfileCard';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import AvatarImage from '@/shared/assets/tests/avatar.jpg';

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
  args: {
    data: {
      first: 'Alex',
      lastname: 'Lev',
      age: 16,
      currency: Currency.EUR,
      country: Country.Russia,
      city: 'Moscow',
      username: 'admin',
      avatar: AvatarImage as string,
    },
  },
  decorators: [StoreDecorator({})],
};

export const Dark: Story = {
  args: {
    data: {
      first: 'Alex',
      lastname: 'Lev',
      age: 16,
      currency: Currency.EUR,
      country: Country.Russia,
      city: 'Moscow',
      username: 'admin',
      avatar: AvatarImage as string,
    },
  },
  decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})],
};

export const WithError: Story = {
  args: {
    error: 'true',
  },
  decorators: [StoreDecorator({})],
};

export const Loading: Story = {
  args: {
    isLoading: true,
  },
  decorators: [StoreDecorator({})],
};
