import type { Meta, StoryObj } from '@storybook/react';
import { Text } from './Text';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta = {
  title: 'shared/Text',
  component: Text,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, omnis!',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam autem error incidunt modi odit possimus vitae voluptatum. Accusamus, delectus, magni.',
  },
};

export const WithOnlyTitle: Story = {
  args: {
    title:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, omnis!',
  },
};

export const WithOnlyText: Story = {
  args: {
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam autem error incidunt modi odit possimus vitae voluptatum. Accusamus, delectus, magni.',
  },
};

export const PrimaryDark: Story = {
  args: {
    title:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, omnis!',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam autem error incidunt modi odit possimus vitae voluptatum. Accusamus, delectus, magni.',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const WithOnlyTitleDark: Story = {
  args: {
    title:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, omnis!',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const WithOnlyTextDark: Story = {
  args: {
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam autem error incidunt modi odit possimus vitae voluptatum. Accusamus, delectus, magni.',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};