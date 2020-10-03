import { Action, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import api from '_apiCalls';
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
      const currentUser = await api.get('login');

      return dispatch(actionCreators.saveCurrentUserSuccess(currentUser));
    } catch (error) {
      dispatch(actionCreators.saveCurrentUserError(error));
    }
  };
};
