import { type StateSchema } from '@/app/providers/StoreProvider';

export const getLogin = (state: StateSchema) => state.loginForm;
