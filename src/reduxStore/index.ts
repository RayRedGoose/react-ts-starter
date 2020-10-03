import { applyMiddleware, createStore, Store } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';

const store: Store<Object> = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
