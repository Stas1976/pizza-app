import * as types from './types';

export const onSignIn = payload => {
  return {
    type: types.SIGNED_IN,
    payload
  };
};

export const onSignOut = () => {
  return {
    type: types.SIGNED_OUT
  };
};
