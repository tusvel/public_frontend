export { userReducer, userActions } from './model/slice/userSlice';
export type { UserSchema, User } from './model/types/user';
export { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';
export {
  isUserAdmin,
  isUserManager,
  getUserRole,
} from './model/selectors/getUserRole';
export { UserRole } from './model/consts/consts';
export { getUserInited } from './model/selectors/getUserInited/getUserInited';
