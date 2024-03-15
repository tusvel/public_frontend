import { createAsyncThunk } from '@reduxjs/toolkit';
import { type User } from '../../../../../entities/User/model/types/user';
import { userActions } from '../../../../../entities/User';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';
import { type ThunkConfig } from '@/app/providers/StoreProvider';

type LoginByUsernameProps = {
  username: string;
  password: string;
};

export const loginByUsername = createAsyncThunk<
  User,
  LoginByUsernameProps,
  ThunkConfig<string>
>('users/fetchByIdStatus', async (authData, thunkAPI) => {
  const { dispatch, rejectWithValue, extra } = thunkAPI;
  try {
    const response = await extra.api.post<User>('/login', authData);

    if (!response.data) {
      throw new Error();
    }

    dispatch(userActions.setAuthData(response.data));
    localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));

    return response.data;
  } catch (e) {
    return rejectWithValue('error');
  }
});
