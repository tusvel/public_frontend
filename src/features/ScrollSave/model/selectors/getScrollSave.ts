// eslint-disable-next-line tusvel/layer-imports
import { type StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';
import { createSelector } from '@reduxjs/toolkit';

export const getScrollSave = (state: StateSchema) => state.scrollSave.scroll;

export const getScrollSaveByPath = createSelector(
  getScrollSave,
  (state: StateSchema, path: string) => path,
  (scroll, path) => scroll[path] || 0,
);
