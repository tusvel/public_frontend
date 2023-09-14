import { type ComponentType } from 'react';
import { StoreProvider } from 'app/providers/StoreProvider';
import { type StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { profileReducer } from 'entities/Profile';
import { type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { ArticleDetailsReducer } from 'entities/Article';
import { addCommentFormReducer } from 'features/AddCommentForm/model/slice/addCommentFormSlice';
import { articleDetailsCommentsReducer } from 'pages/ArticleDetailsPage/model/slice/ArticleDetailsCommentSlice';

const defaultAsyncReducers: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer,
  articleDetails: ArticleDetailsReducer,

  addCommentForm: addCommentFormReducer,
  articleDetailsComments: articleDetailsCommentsReducer,
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
