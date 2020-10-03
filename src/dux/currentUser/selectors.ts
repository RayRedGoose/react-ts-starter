import { IStore } from '_ts-assets/types';
import { CurrentUserType } from './types';

const getCurrentUser = ({ currentUser }: IStore): CurrentUserType =>
  currentUser;

export { getCurrentUser };
