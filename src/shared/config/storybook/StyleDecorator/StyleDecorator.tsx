import type { StoryFn } from '@storybook/react';
import type { ComponentType } from 'react';
import 'app/styles/index.scss';

export const StyleDecorator: StoryFn = (StoryComponent: ComponentType) => (
  <StoryComponent />
);
