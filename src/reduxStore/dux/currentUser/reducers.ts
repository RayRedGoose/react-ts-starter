import { ICurrentUser, IActionType } from './types';

export default function (state: any = {}, action: IActionType): ICurrentUser {
  switch (action.type) {
    default: {
      return state;
    }
  }
}
