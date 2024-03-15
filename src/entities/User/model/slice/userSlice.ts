import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type User, type UserSchema } from '../types/user';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';

const initialState: UserSchema = {
  authData: undefined,
  _init: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData(state, action: PayloadAction<User>) {
      state.authData = action.payload;
    },
    initAuthData(state) {
      const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);
      if (user) {
        state.authData = JSON.parse(user) as User;
      }

      state._init = true;
    },
    logout(state) {
      state.authData = undefined;
      localStorage.removeItem(USER_LOCALSTORAGE_KEY);
    },
  },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
