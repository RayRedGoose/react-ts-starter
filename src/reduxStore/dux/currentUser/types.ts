export type CurrentUserType = ICurrentUser & IErroredCurrentUser;

export interface ICurrentUser {
  firstName: string;
  lastName: string;
}

export interface IErroredCurrentUser {
  error: string;
}

export interface IActionType {
  type: string;
  [key: string]: any;
}

export enum actionCreatorsTypes {
  SAVE_CURRENT_USER_ERROR = 'currentUser/SAVE_CURRENT_USER_ERROR',
  SAVE_CURRENT_USER_SUCCESS = 'currentUser/SAVE_CURRENT_USER_SUCCESS',
}

export interface ISaveCurrentUserAction {
  type: actionCreatorsTypes.SAVE_CURRENT_USER_SUCCESS;
  currentUser: ICurrentUser;
}

export interface IErroredSaveCurrentUserAction {
  type: actionCreatorsTypes.SAVE_CURRENT_USER_SUCCESS;
  error: IErroredCurrentUser;
}
