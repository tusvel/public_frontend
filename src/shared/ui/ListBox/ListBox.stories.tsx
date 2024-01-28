import type { Meta, StoryObj } from '@storybook/react';
import { ListBox } from './ListBox';

const meta = {
  title: 'shared/ListBox',
  component: ListBox,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ListBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};

const paddingDecorator = (Story: any) => (
  <div style={{ padding: 100 }}>
    <Story />
  </div>
);

const items = [
  {
    content: <div>one</div>,
    value: '1',
  },
  {
    content: <div>two</div>,
    value: '2',
  },
  {
    content: <div>three</div>,
    value: '3',
  },
];
export const TopLeft: Story = {
  args: {
    direction: 'top left',
    defaultValue: 'open',
    items,
  },
  decorators: [paddingDecorator],
};

export const TopRight: Story = {
  args: {
    direction: 'top right',
    defaultValue: 'open',
    items,
  },
  decorators: [paddingDecorator],
};

export const BottomLeft: Story = {
  args: {
    direction: 'bottom left',
    defaultValue: 'open',
    items,
  },
  decorators: [paddingDecorator],
};

export const BottomRight: Story = {
  args: {
    direction: 'bottom right',
    defaultValue: 'open',
    items,
  },
  decorators: [paddingDecorator],
};
