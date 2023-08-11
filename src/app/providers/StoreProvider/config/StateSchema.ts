import { type CounterSchema } from 'entities/Counter';
import { type UserSchema } from 'entities/User';
import { type LoginSchema } from 'features/AuthByUsername';

export type StateSchema = {
  counter: CounterSchema;
  user: UserSchema;
  loginForm: LoginSchema;
};
