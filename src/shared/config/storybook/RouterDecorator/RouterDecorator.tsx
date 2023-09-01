import { type ComponentType } from 'react';
import { BrowserRouter } from 'react-router-dom';

export const RouterDecorator = (StoryComponent: ComponentType) => (
  <BrowserRouter>
    <StoryComponent />
  </BrowserRouter>
);
