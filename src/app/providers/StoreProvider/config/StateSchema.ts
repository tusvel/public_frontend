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
import { type ArticleDetailsSchema } from 'entities/Article';
import { type ArticleDetailsPageSchema } from 'pages/ArticleDetailsPage';
import { type AddCommentFormSchema } from 'features/AddCommentForm/model/types/AddCommentFormSchema';
import { type ArticlesPageSchema } from 'pages/ArticlesPage';
import { type ScrollSaveSchema } from 'widgets/ScrollSave';

export type StateSchema = {
  user: UserSchema;
  scrollSave: ScrollSaveSchema;

  // Асинхронные редюсеры
  profile?: ProfileSchema;
  loginForm?: LoginSchema;
  articleDetails?: ArticleDetailsSchema;
  addCommentForm?: AddCommentFormSchema;
  articlesPage?: ArticlesPageSchema;
  articleDetailsPage?: ArticleDetailsPageSchema;
};

export type StateSchemaKey = keyof StateSchema;
export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>;

export type ReduxStoreWithManager = {
  reducerManager: ReducerManager;
} & EnhancedStore<StateSchema>;

export type ReducerManager = {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
  // true - вмонтирован, false - демонтирован
  getMountedReducers: () => MountedReducers;
};

export type ThunkExtraArg = {
  api: AxiosInstance;
};

export type ThunkConfig<T> = {
  rejectValue: T;
  extra: ThunkExtraArg;
  state: StateSchema;
};
