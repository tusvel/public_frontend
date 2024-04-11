import { type PayloadAction } from '@reduxjs/toolkit';
import { type AddCommentFormSchema } from '../types/AddCommentFormSchema';
import { buildSlice } from '@/shared/lib/store';

const initialState: AddCommentFormSchema = {
  text: '',
};

export const addCommentFormSlice = buildSlice({
  name: 'addCommentForm',
  initialState,
  reducers: {
    setText(state, action: PayloadAction<string>) {
      state.text = action.payload;
    },
  },
});

export const {
  actions: addCommentFormActions,
  reducer: addCommentFormReducer,
  useActions: useCommentFormActions,
} = addCommentFormSlice;
