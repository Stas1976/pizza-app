import React from 'react';
import ReactDOM from 'react-dom';
import './sass/index.scss';
import App from './App';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';

import cartReducer from './reducers/cartReducer';
import addressReducer from './reducers/adressReducer';
import authReducer from './reducers/authReducer';

const rootReducer = combineReducers({
  cartReducer,
  addressReducer,
  authReducer
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
