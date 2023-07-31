import type { StoryFn } from '@storybook/react';
import { type ComponentType } from 'react';
import { BrowserRouter } from 'react-router-dom';
import 'app/styles/index.scss';

export const RouterDecorator: StoryFn = (StoryComponent: ComponentType) => (
  <BrowserRouter>
    <StoryComponent />
  </BrowserRouter>
);
