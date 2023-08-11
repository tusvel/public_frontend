import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { type User } from '../../../../../entities/User/model/types/user';
import { userActions } from '../../../../../entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';

type LoginByUsernameProps = {
  username: string;
  password: string;
};

export const loginByUsername = createAsyncThunk<
  User,
  LoginByUsernameProps,
  { rejectValue: string }
>('users/fetchByIdStatus', async (authData, thunkAPI) => {
  try {
    const response = await axios.post<User>(
      'http://localhost:8000/login',
      authData,
    );

    if (!response.data) {
      throw new Error();
    }

    thunkAPI.dispatch(userActions.setAuthData(response.data));
    localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));

    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue('error');
  }
});
