import { type StateSchema } from '@/app/providers/StoreProvider';
import { getProfileForm } from './getProfileForm';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';

describe('getProfileForm', () => {
  test('should return profile form', () => {
    const data = {
      first: 'Alex',
      lastname: 'Lev',
      age: 16,
      currency: Currency.EUR,
      country: Country.Russia,
      city: 'Moscow',
      username: 'admin',
      avatar:
        'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg',
    };
    const state: DeepPartial<StateSchema> = {
      profile: {
        form: data,
      },
    };
    expect(getProfileForm(state as StateSchema)).toEqual(data);
  });
  test('should work with empty test', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileForm(state as StateSchema)).toEqual(undefined);
  });
});
