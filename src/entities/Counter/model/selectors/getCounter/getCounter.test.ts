import { getCounter } from './getCounter';
import { type StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

describe('getCounter', () => {
  test('should return counter', () => {
    const state: DeepPartial<StateSchema> = {
      counter: { value: 10 },
    };
    expect(getCounter(state as StateSchema)).toEqual({ value: 10 });
  });
});
