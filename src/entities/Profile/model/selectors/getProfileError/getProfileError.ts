import { type StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const getProfileError = (state: StateSchema) => state.profile?.error;
