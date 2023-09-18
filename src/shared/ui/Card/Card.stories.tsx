import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';
import { Text } from 'shared/ui/Text/Text';

const meta = {
  title: 'shared/Card',
  component: Card,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: <Text title="text" text="text text asdf sadfl sa" />,
  },
};
