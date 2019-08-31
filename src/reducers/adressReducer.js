import * as types from '../actions/types';

const initialState = {
  street: '',
  house: '',
  room: '',
  code: '',
  floor: '',
  addressName: '',
  telNumber: '',
  comments: '',
  takeItYourSelf: '',
  deliveryAddress: {},
  errors: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_ADDRESS_ERRORS:
      return {
        ...state,
        errors: action.errors
      };

    case types.ADDRESS_INPUT_CHANGE:
      return { ...state, [action.name]: action.value };

    case types.ADD_ADDRESS:
      return { ...state, deliveryAddress: action.payload, errors: {} };

    default:
      return state;
  }
};
