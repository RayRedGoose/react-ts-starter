import { connect } from 'react-redux';
import { IStore } from 'types';
import App, { Props } from './App';
import { selectors as userSelectors } from 'store/dux/currentUser';

const mapStateToProps = (state: IStore): Props => ({
  loggedUser: userSelectors.getCurrentUser(state),
});

export default connect(mapStateToProps)(App);
