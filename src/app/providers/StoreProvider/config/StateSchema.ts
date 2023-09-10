import { type CounterSchema } from 'entities/Counter';
import { type UserSchema } from 'entities/User';
import { type LoginSchema } from 'features/AuthByUsername';
import {
  type AnyAction,
  type CombinedState,
  type EnhancedStore,
  type Reducer,
  type ReducersMapObject,
} from '@reduxjs/toolkit';
import { type ProfileSchema } from 'entities/Profile';
import { type AxiosInstance } from 'axios';
import { type NavigateFunction } from 'react-router/dist/lib/hooks';
import { type ArticleDetailsSchema } from 'entities/Article';

export type StateSchema = {
  counter: CounterSchema;
  user: UserSchema;

  // Асинхронные редюсеры
  profile?: ProfileSchema;
  loginForm?: LoginSchema;
  articleDetails?: ArticleDetailsSchema;
};

export type StateSchemaKey = keyof StateSchema;

export type ReduxStoreWithManager = {
  reducerManager: ReducerManager;
} & EnhancedStore<StateSchema>;

export type ReducerManager = {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
};

export type ThunkExtraArg = {
  api: AxiosInstance;
  navigate?: NavigateFunction;
};

export type ThunkConfig<T> = {
  rejectValue: T;
  extra: ThunkExtraArg;
  state: StateSchema;
};
