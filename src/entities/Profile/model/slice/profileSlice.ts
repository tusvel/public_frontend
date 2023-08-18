import { createSlice } from '@reduxjs/toolkit';
import { type ProfileSchema } from 'entities/Profile/model/types/profile';

const initialState: ProfileSchema = {
  readonly: true,
  error: undefined,
  data: undefined,
  isLoading: false,
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
