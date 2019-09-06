import React from 'react';
import ReactDOM from 'react-dom';
import './sass/index.scss';
import App from './App';
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import cartReducer from './reducers/cartReducer';
import addressReducer from './reducers/adressReducer';
import logInReducer from './reducers/logInReducer';
import signUpReducer from './reducers/signUpReducer';
import profileReducer from './reducers/profileReducer';
import googleAuthReducer from './reducers/googleAuthReducer';

const rootReducer = combineReducers({
  cartReducer,
  addressReducer,
  logInReducer,
  signUpReducer,
  profileReducer,
  googleAuthReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
