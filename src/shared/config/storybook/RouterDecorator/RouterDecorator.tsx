import type { StoryFn } from '@storybook/react';
import { type ComponentType } from 'react';
import { BrowserRouter } from 'react-router-dom';

export const RouterDecorator: StoryFn = (StoryComponent: ComponentType) => (
  <BrowserRouter>
    <StoryComponent />
  </BrowserRouter>
);
