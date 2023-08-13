import { createSelector } from '@reduxjs/toolkit';
import { getLogin } from 'features/AuthByUsername/model/selectors/getLogin/getLogin';

export const getLoginIsLoading = createSelector(
  getLogin,
  (login) => login?.isLoading || false,
);
