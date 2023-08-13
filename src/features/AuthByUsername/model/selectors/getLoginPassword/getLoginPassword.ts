import { createSelector } from '@reduxjs/toolkit';
import { getLogin } from 'features/AuthByUsername/model/selectors/getLogin/getLogin';

export const getLoginPassword = createSelector(
  getLogin,
  (login) => login?.password || '',
);
