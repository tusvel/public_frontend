import { type CounterSchema } from 'entities/Counter';
import { type UserSchema } from 'entities/User';

export type StateSchema = {
  counter: CounterSchema;
  user: UserSchema;
};
