import { type StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const getUserInited = (state: StateSchema) => state.user._init;
