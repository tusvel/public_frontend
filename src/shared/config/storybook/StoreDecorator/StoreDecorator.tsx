import type { StoryFn } from '@storybook/react';
import { type ComponentType } from 'react';
import { StoreProvider } from 'app/providers/StoreProvider';

export const StoreDecorator: StoryFn = (StoryComponent: ComponentType) => (
  <StoreProvider
    initialState={{
      counter: {
        value: 10,
      },
    }}
  >
    <StoryComponent />
  </StoreProvider>
);
