import type { Meta, StoryObj } from '@storybook/react';
import { DropDown } from './DropDown';
import { Button } from '../Button/Button';

const meta = {
  title: 'shared/DropDown',
  component: DropDown,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof DropDown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    trigger: <Button>Open</Button>,
    items: [
      {
        content: <div>one</div>,
      },
      {
        content: <div>two</div>,
      },
      {
        content: <div>three</div>,
      },
    ],
  },
};
