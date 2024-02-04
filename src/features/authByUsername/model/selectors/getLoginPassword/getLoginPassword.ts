import { createSelector } from '@reduxjs/toolkit';
import { getLogin } from '../getLogin/getLogin';

export const getLoginPassword = createSelector(
  getLogin,
  (login) => login?.password || '',
);
