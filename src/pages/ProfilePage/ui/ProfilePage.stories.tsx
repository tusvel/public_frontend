import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import ProfilePage from './ProfilePage';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { Theme } from '@/shared/const/theme';

const meta = {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ProfilePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
  decorators: [
    StoreDecorator({
      profile: {
        form: {
          first: 'Alex',
          lastname: 'Lev',
          age: 16,
          currency: Currency.EUR,
          country: Country.Russia,
          city: 'Moscow',
          username: 'admin',
          avatar:
            'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg',
        },
      },
    }),
  ],
};

export const Dark: Story = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
      profile: {
        form: {
          first: 'Alex',
          lastname: 'Lev',
          age: 16,
          currency: Currency.EUR,
          country: Country.Russia,
          city: 'Moscow',
          username: 'admin',
          avatar:
            'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg',
        },
      },
    }),
  ],
};
