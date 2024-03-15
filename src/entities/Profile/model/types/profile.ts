import { type Currency } from '@/entities/Currency';
import { type Country } from '@/entities/Country';

export type Profile = {
  id?: string;
  first?: string;
  lastname?: string;
  age?: number;
  currency?: Currency;
  country?: Country;
  city?: string;
  username?: string;
  avatar?: string;
};
