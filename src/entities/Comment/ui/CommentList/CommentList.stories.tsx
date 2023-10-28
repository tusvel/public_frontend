import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { CommentList } from './CommentList';
import Avatar from 'shared/assets/tests/avatar.jpg';

const meta = {
  title: 'entities/Comment/CommentList',
  component: CommentList,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof CommentList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    comments: [
      {
        id: '1',
        text: 'hello world',
        user: { id: '1', username: 'Vasya', avatar: Avatar as string },
      },
      {
        id: '2',
        text: 'my friend',
        user: { id: '2', username: 'Sanya', avatar: Avatar as string },
      },
    ],
  },
  decorators: [StoreDecorator({})],
};

export const Loading: Story = {
  args: {
    comments: [],
    isLoading: true,
  },
  decorators: [StoreDecorator({})],
};
