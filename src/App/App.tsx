import React from 'react';
import isEmpty from 'lodash/isEmpty';

import { ICurrentUser } from 'store/dux/currentUser/types';

export interface Props {
  loggedUser: ICurrentUser;
}

const App = ({ loggedUser }: Props): JSX.Element =>
  isEmpty(loggedUser) ? (
    <div>User is not logged in</div>
  ) : (
    <div>User is logged in</div>
  );

export default App;
