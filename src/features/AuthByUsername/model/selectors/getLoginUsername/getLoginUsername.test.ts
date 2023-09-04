import { type StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { getLoginUsername } from './getLoginUsername';

describe('getLoginUsername', () => {
  test('should return username login', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        username: 'admin',
      },
    };
    expect(getLoginUsername(state as StateSchema)).toBe(
      state.loginForm?.username,
    );
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginUsername(state as StateSchema)).toBe('');
  });
});
