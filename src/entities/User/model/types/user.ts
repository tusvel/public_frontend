export enum UserRole {
  ADMIN = 'ADMIN',
  MANAGER = 'MANAGER',
  USER = 'USER',
}

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
