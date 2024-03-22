import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { Theme } from '@/shared/const/theme';

const meta = {
  title: 'shared/Input',
  component: Input,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    placeholder: 'Введите ваш username',
    autofocus: true,
  },
};

export const PrimaryDark: Story = {
  args: {
    placeholder: 'Введите ваш username',
    autofocus: true,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
