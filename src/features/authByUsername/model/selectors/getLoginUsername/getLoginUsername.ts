import { createSelector } from '@reduxjs/toolkit';
import { getLogin } from '../getLogin/getLogin';

export const getLoginUsername = createSelector(
  getLogin,
  (login) => login?.username || '',
);
