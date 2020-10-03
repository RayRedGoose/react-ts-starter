import { CurrentUserType, IActionType } from './types';

export default function (
  state: any = {},
  action: IActionType
): CurrentUserType {
  switch (action.type) {
    default: {
      return state;
    }
  }
}
