import type { ComponentType } from 'react';
// eslint-disable-next-line tusvel/layer-imports
import '@/app/styles/index.scss';

export const StyleDecorator = (StoryComponent: ComponentType) => (
  <StoryComponent />
);
