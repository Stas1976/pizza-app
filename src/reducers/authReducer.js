import * as types from '../actions/types';

const initialState = {
  togglAuthModal: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.TOOGLE_AUTH_MODAL:
      return { ...state, togglAuthModal: !state.togglAuthModal };

    default:
      return state;
  }
};
