import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { CommentCard } from './CommentCard';
import Avatar from 'shared/assets/tests/avatar.jpg';

const meta = {
  title: 'entities/Comment/CommentCard',
  component: CommentCard,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof CommentCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    comment: {
      id: '1',
      text: 'hello world',
      user: { id: '1', username: 'Vasya', avatar: Avatar as string },
    },
  },
  decorators: [StoreDecorator({})],
};

export const Loading: Story = {
  args: {
    isLoading: true,
  },
  decorators: [StoreDecorator({})],
};
