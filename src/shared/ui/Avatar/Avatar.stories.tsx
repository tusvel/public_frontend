import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';
import AvatarImage from 'shared/assets/tests/avatar.jpg';

const meta = {
  title: 'shared/Avatar',
  component: Avatar,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    src: AvatarImage as string,
    size: 150,
  },
};

export const Small: Story = {
  args: {
    src: AvatarImage as string,
    size: 50,
  },
};
