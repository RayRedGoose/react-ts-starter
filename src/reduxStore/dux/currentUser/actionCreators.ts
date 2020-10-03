import {
  ICurrentUser,
  IErroredCurrentUser,
  ISaveCurrentUserAction,
  IErroredSaveCurrentUserAction,
  actionCreatorsTypes,
} from './types';

export const saveCurrentUserSuccess = (
  currentUser: ICurrentUser
): ISaveCurrentUserAction => ({
  type: actionCreatorsTypes.SAVE_CURRENT_USER_SUCCESS,
  currentUser,
});

export const saveCurrentUserError = (
  error: IErroredCurrentUser
): IErroredSaveCurrentUserAction => ({
  type: actionCreatorsTypes.SAVE_CURRENT_USER_SUCCESS,
  error,
});
