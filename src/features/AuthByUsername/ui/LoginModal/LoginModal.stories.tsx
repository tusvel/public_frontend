import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { LoginModal } from 'features/AuthByUsername';

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
};

export const PrimaryDark: Story = {
  args: {
    isOpen: true,
    onClose: () => null,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
