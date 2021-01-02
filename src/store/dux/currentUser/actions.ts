import { Action, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import api from 'api';
import * as actionCreators from './actionCreators';
import { ICurrentUser, IErroredCurrentUser } from './types';

type ActionReturnType = ThunkAction<
  void,
  ICurrentUser,
  null,
  Action<IErroredCurrentUser>
>;

export const saveCurrentUser = (): ActionReturnType => {
  return async (dispatch: Dispatch) => {
    try {
      await api.get('login');

      // return dispatch(actionCreators.saveCurrentUserSuccess(currentUser));
    } catch (error) {
      dispatch(actionCreators.saveCurrentUserError(error));
    }
  };
};
