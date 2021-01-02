import { IStore } from 'types';
import { CurrentUserType } from './types';

const getCurrentUser = ({ currentUser }: IStore): CurrentUserType =>
  currentUser;

export { getCurrentUser };
