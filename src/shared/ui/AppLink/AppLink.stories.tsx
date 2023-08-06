import type { Meta, StoryObj } from '@storybook/react';
import { AppLink } from './AppLink';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { AppLinkTheme } from './AppLink.interface';

const meta = {
  title: 'shared/AppLink',
  component: AppLink,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Text',
    to: '/',
    theme: AppLinkTheme.PRIMARY,
  },
};

export const Secondary: Story = {
  args: {
    children: 'Text',
    to: '/',
    theme: AppLinkTheme.SECONDARY,
  },
};

export const InvertedPrimary: Story = {
  args: {
    children: 'Text',
    to: '/',
    theme: AppLinkTheme.INVERTED_PRIMARY,
  },
};

export const InvertedSecondary: Story = {
  args: {
    children: 'Text',
    to: '/',
    theme: AppLinkTheme.INVERTED_SECONDARY,
  },
};

export const PrimaryDark: Story = {
  args: {
    children: 'Text',
    to: '/',
    theme: AppLinkTheme.PRIMARY,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const SecondaryDark: Story = {
  args: {
    children: 'Text',
    to: '/',
    theme: AppLinkTheme.SECONDARY,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const InvertedPrimaryDark: Story = {
  args: {
    children: 'Text',
    to: '/',
    theme: AppLinkTheme.INVERTED_PRIMARY,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const InvertedSecondaryDark: Story = {
  args: {
    children: 'Text',
    to: '/',
    theme: AppLinkTheme.INVERTED_SECONDARY,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
