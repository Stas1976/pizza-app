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
  address: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.ADDRESS_INPUT_CHANGE:
      return { ...state, [action.name]: action.value };

    case types.ADD_ADDRESS:
      return { ...state, address: action.payload };

    default:
      return state;
  }
};
