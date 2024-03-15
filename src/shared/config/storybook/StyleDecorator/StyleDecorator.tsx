import type { ComponentType } from 'react';
import '@/app/styles/index.scss';

export const StyleDecorator = (StoryComponent: ComponentType) => (
  <StoryComponent />
);
