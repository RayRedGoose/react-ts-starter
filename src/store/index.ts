import { applyMiddleware, createStore, Store } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { IStore } from 'types';
import rootReducer from './rootReducer';

const store: Store<IStore> = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
