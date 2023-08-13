import type { StoryFn } from '@storybook/react';
import { type ComponentType } from 'react';
import { StoreProvider } from 'app/providers/StoreProvider';
import { type DeepPartial, type ReducersMapObject } from '@reduxjs/toolkit';
import { type StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
  loginForm: loginReducer,
};

export const StoreDecorator =
  (
    state: DeepPartial<StateSchema>,
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>,
  ): StoryFn =>
  (StoryComponent: ComponentType) => (
    <StoreProvider
      asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
      initialState={state}
    >
      <StoryComponent />
    </StoreProvider>
  );
