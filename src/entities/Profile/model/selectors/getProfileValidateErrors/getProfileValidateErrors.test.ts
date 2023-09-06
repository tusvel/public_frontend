import { type StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { getProfileValidateErrors } from './getProfileValidateErrors';
import { ValidateProfileError } from 'entities/Profile/model/types/profile';

describe('getProfileValidateErrors', () => {
  test('should return profile readonly', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        validateErrors: [
          ValidateProfileError.SERVER_ERROR,
          ValidateProfileError.INCORRECT_AGE,
        ],
      },
    };
    expect(getProfileValidateErrors(state as StateSchema)).toEqual([
      ValidateProfileError.SERVER_ERROR,
      ValidateProfileError.INCORRECT_AGE,
    ]);
  });
  test('should work with empty test', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
  });
});
