import { type StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { getProfileReadonly } from './getProfileReadonly';

describe('getProfileReadonly', () => {
  test('should return profile readonly', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        readonly: true,
      },
    };
    expect(getProfileReadonly(state as StateSchema)).toEqual(true);
  });
  test('should work with empty test', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileReadonly(state as StateSchema)).toEqual(undefined);
  });
});
