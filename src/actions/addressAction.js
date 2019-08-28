import * as types from './types';

export const addressSubmit = (e, payload) => {
  e.preventDefault();
  return {
    type: types.ADD_ADDRESS,
    payload
  };
};

export const addressInputChange = payload => {
  return {
    type: types.ADDRESS_INPUT_CHANGE,
    name: payload.target.name,
    value: payload.target.value
  };
};
