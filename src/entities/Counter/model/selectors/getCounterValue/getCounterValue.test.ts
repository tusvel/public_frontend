import { type DeepPartial } from '@reduxjs/toolkit';
import { type StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { getCounterValue } from './getCounterValue';

describe('getCounter', () => {
  test('should return counter value', () => {
    const state: DeepPartial<StateSchema> = {
      counter: { value: 10 },
    };
    expect(getCounterValue(state as StateSchema)).toEqual(10);
  });
});
