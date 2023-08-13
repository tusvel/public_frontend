import { createSelector } from '@reduxjs/toolkit';
import { getLogin } from 'features/AuthByUsername/model/selectors/getLogin/getLogin';

export const getLoginError = createSelector(getLogin, (login) => login?.error);
