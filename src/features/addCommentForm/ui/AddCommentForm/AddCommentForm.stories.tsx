import type { Meta, StoryObj } from '@storybook/react';
import AddCommentForm from './AddCommentForm';
import { action } from '@storybook/addon-actions';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta = {
  title: 'features/addCommentForm',
  component: AddCommentForm,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof AddCommentForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    onSendComment: action('onSendComment'),
  },
  decorators: [StoreDecorator({})],
};
