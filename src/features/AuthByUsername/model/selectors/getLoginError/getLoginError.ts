import { createSelector } from '@reduxjs/toolkit';
import { getLogin } from '../getLogin/getLogin';

export const getLoginError = createSelector(getLogin, (login) => login?.error);
