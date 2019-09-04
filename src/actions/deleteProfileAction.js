import * as types from './types';

export const deleteProfile = payload => {
  return {
    type: types.DELETE_PROFILE,
    payload
  };
};
