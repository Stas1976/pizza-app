import * as types from '../actions/types';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  errors: {},
  toggleSignUpModal: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.LOG_OUT:
      return initialState;

    case types.AUTH_ERROR:
      return { ...state, errors: action.errors };

    case types.AUTH_INPUT_CHANG:
      return { ...state, [action.name]: action.value };

    case types.TOGGLE_SIGNUP_MODAL:
      return { ...state, toggleSignUpModal: !state.toggleSignUpModal };

    default:
      return state;
  }
};
