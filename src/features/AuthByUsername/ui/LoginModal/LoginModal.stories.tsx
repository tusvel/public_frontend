import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { LoginModal } from './LoginModal';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

const meta = {
  title: 'features/LoginModal',
  component: LoginModal,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof LoginModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    isOpen: true,
    onClose: () => null,
  },
  decorators: [
    StoreDecorator({
      loginForm: {
        username: 'admin',
        password: '12345',
      },
    }),
  ],
};

export const WithError: Story = {
  args: {
    isOpen: true,
    onClose: () => null,
  },
  decorators: [
    StoreDecorator({
      loginForm: {
        username: 'admin',
        password: '12345',
        error: 'error',
      },
    }),
  ],
};

export const Loading: Story = {
  args: {
    isOpen: true,
    onClose: () => null,
  },
  decorators: [
    StoreDecorator({
      loginForm: {
        username: 'admin',
        password: '12345',
        isLoading: true,
      },
    }),
  ],
};

export const PrimaryDark: Story = {
  args: {
    isOpen: true,
    onClose: () => null,
  },
  decorators: [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
      loginForm: {
        username: 'admin',
        password: '12345',
      },
    }),
  ],
};
