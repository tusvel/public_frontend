import { type StateSchema } from '@/app/providers/StoreProvider';
import { getLogin } from './getLogin';

describe('getLogin', () => {
  test('should return login', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        username: 'admin',
        password: '12345',
        isLoading: false,
        error: undefined,
      },
    };
    expect(getLogin(state as StateSchema)).toBe(state.loginForm);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLogin(state as StateSchema)).toBe(undefined);
  });
});
