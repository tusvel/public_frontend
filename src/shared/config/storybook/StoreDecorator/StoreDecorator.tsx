import { type ComponentType } from 'react';
import { StoreProvider } from '@/app/providers/StoreProvider';
import { type StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';
import { loginReducer } from '@/features/authByUsername';
import { type ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { ArticleDetailsReducer } from '@/entities/Article';
import { addCommentFormReducer } from '@/features/addCommentForm';
import { articleDetailsPageReducer } from '@/pages/ArticleDetailsPage';
import { profileReducer } from '@/features/editableProfileCard';

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
