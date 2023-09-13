export type User = {
  id: string;
  username: string;
  avatar?: string;
};

export type UserSchema = {
  authData?: User;
  _init: boolean;
};
