import { type Currency } from 'entities/Currency';
import { type Country } from 'entities/Country/model/types/country';

export type Profile = {
  first?: string;
  lastname?: string;
  age?: number;
  currency?: Currency;
  country?: Country;
  city?: string;
  username?: string;
  avatar?: string;
};

export type ProfileSchema = {
  data?: Profile;
  form?: Profile;
  isLoading: boolean;
  error?: string;
  readonly: boolean;
};
