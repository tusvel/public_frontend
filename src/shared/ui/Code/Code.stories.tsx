import type { Meta, StoryObj } from '@storybook/react';
import { Code } from './Code';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta = {
  title: 'shared/Code',
  component: Code,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Code>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    text:
      'const meta = {\n' +
      // eslint-disable-next-line
      "  title: 'shared/Code',\n" +
      '  component: Code,\n' +
      '  parameters: {\n' +
      // eslint-disable-next-line
      "    layout: 'fullscreen',\n" +
      '  },\n' +
      '} satisfies Meta<typeof Code>;\n' +
      '\n' +
      'export default meta;\n' +
      'type Story = StoryObj<typeof meta>;',
  },
};

export const PrimaryDark: Story = {
  args: {
    text:
      'const meta = {\n' +
      // eslint-disable-next-line
      "  title: 'shared/Code',\n" +
      '  component: Code,\n' +
      '  parameters: {\n' +
      // eslint-disable-next-line
      "    layout: 'fullscreen',\n" +
      '  },\n' +
      '} satisfies Meta<typeof Code>;\n' +
      '\n' +
      'export default meta;\n' +
      'type Story = StoryObj<typeof meta>;',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
