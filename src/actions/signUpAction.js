import * as types from './types';
import axios from 'axios';

const url = 'http://692803.s.dedikuoti.lt:5000/api/auth/signup';

export const toggleSignUpModal = () => {
  return {
    type: types.TOGGLE_SIGNUP_MODAL
  };
};

export const inputSignUpChange = e => {
  return {
    type: types.SIGN_UP_INPUT_CHANG,
    name: e.target.name,
    value: e.target.value
  };
};

export const signUp = (e, user, history) => {
  e.preventDefault();

  const errors = {};
  if (!user.firstName) errors.firstName = 'Missing first name';
  if (!user.lastName) errors.lastName = 'Missing last name';
  if (!user.email) errors.email = 'Missing email';
  if (!user.password) errors.password = 'Missing password';
  if (Object.keys(errors).length) {
    return {
      type: types.AUTH_ERROR,
      errors
    };
  }

  return async dispatch => {
    try {
      const res = await axios.post(url, user);

      //isaugom JWT token to local storage
      localStorage.setItem('word_auth_token', res.data);
      dispatch({
        type: types.LOG_IN,
        user
      });
      history.push('/');
    } catch (e) {
      console.log(e.response);
    }
  };
};

export const logIn = (e, user, history) => {};
