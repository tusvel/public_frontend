import { type UserRole } from '../consts/consts';

export type User = {
  id: string;
  username: string;
  avatar?: string;
  roles?: UserRole[];
};

export type UserSchema = {
  authData?: User;
  _init: boolean;
};
