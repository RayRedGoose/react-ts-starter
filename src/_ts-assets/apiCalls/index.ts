import { ICurrentUser } from 'dux/currentUser/types';

const defaultCurrentUser: ICurrentUser = {
  firstName: 'Ray',
  lastName: 'Zlou',
};

const api = {
  get: (url: string): ICurrentUser => defaultCurrentUser,
};

export default api;
