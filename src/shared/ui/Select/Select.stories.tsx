import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta = {
  title: 'shared/Select',
  component: Select,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    label: 'Test Select',
    options: [
      { content: '123', value: '123' },
      { content: '1234', value: '1234' },
      { content: '12345', value: '12345' },
    ],
  },
};

export const Dark: Story = {
  args: {
    label: 'Test Select',
    options: [
      { content: '123', value: '123' },
      { content: '1234', value: '1234' },
      { content: '12345', value: '12345' },
    ],
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
