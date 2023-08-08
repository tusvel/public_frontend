export type User = {
  id: number;
  username: string;
};

export type UserSchema = {
  authData?: User;
};
