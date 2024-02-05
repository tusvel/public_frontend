import { type ComponentType, Suspense } from 'react';

export const SuspenseDecorator = (StoryComponent: ComponentType) => (
  <Suspense>
    <StoryComponent />
  </Suspense>
);
