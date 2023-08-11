import type { StoryFn } from '@storybook/react';
import { type ComponentType } from 'react';
import { StoreProvider } from 'app/providers/StoreProvider';
import { type DeepPartial } from '@reduxjs/toolkit';
import { type StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const StoreDecorator =
  (state: DeepPartial<StateSchema>): StoryFn =>
  (StoryComponent: ComponentType) => (
    <StoreProvider initialState={state}>
      <StoryComponent />
    </StoreProvider>
  );
