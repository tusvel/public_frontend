import { type ComponentType } from 'react';
import { type StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import { type ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { loginReducer } from '@/features/authByUsername/testing';
import { ArticleDetailsReducer } from '@/entities/Article/testing';
import { addCommentFormReducer } from '@/features/addCommentForm/testing';
import { articleDetailsPageReducer } from '@/pages/ArticleDetailsPage/testing';
import { profileReducer } from '@/features/editableProfileCard/testing';

const defaultAsyncReducers: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer,
  articleDetails: ArticleDetailsReducer,
  articleDetailsPage: articleDetailsPageReducer,
  addCommentForm: addCommentFormReducer,
};

export const StoreDecorator =
  (state: DeepPartial<StateSchema>, asyncReducers?: ReducersList) =>
  (StoryComponent: ComponentType) => (
    <StoreProvider
      asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
      initialState={state}
    >
      <StoryComponent />
    </StoreProvider>
  );
