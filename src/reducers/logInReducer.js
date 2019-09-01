import * as types from '../actions/types';

const initialState = {
  togglLogInModal: false,
  email: '',
  password: '',
  errors: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.TOOGLE_LOGIN_MODAL:
      return { ...state, togglLogInModal: !state.togglLogInModal };

    default:
      return state;
  }
};
