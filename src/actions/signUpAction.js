import * as types from './types';

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

export const signUp = (e, user) => {
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
};
