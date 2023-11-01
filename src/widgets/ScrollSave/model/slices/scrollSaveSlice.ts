import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type ScrollSaveSchema } from '../types/ScrollSaveSchame';

const initialState: ScrollSaveSchema = {
  scroll: {},
};

export const scrollSaveSlice = createSlice({
  name: 'scrollSave',
  initialState,
  reducers: {
    setScroll(
      state,
      { payload }: PayloadAction<{ path: string; position: number }>,
    ) {
      state.scroll[payload.path] = payload.position;
    },
  },
});

export const { actions: scrollSaveActions } = scrollSaveSlice;
export const { reducer: scrollSaveReducer } = scrollSaveSlice;
