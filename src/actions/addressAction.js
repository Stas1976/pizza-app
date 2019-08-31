import * as types from './types';

export const addressSubmit = (e, payload) => {
  e.preventDefault();

  const errors = {};
  if (!payload.street) errors.street = 'Užpildikyte gatvės laukelį';
  if (!payload.telNumber)
    errors.telNumber = 'Užpildikyte telefono numerio laukelį';
  if (Object.keys(errors).length) {
    return {
      type: types.ADD_ADDRESS_ERRORS,
      errors
    };
  }

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
