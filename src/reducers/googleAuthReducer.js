import * as types from '../actions/types';

const initialStates = {
  signedIn: false,
  googleName: ''
};

export default (state = initialStates, action) => {
  switch (action.type) {
    case types.SIGNED_IN:
      return { ...state, signedIn: true, googleName: action.payload };

    case types.SIGNED_OUT:
      return initialStates;

    default:
      return state;
  }
};
