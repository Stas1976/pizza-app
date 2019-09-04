import * as types from '../actions/types';

const initialStatte = {
  firstName: '',
  lastName: '',
  email: '',
  toggleDeleteModal: false
};

export default (state = initialStatte, action) => {
  switch (action.type) {
    case types.DELETE_PROFILE:
      return {
        ...state,
        firstName: '',
        lastName: '',
        email: ''
      };

    case types.TOGGLE_DELETE_PROFILE_MODAL:
      return {
        ...state,
        toggleDeleteModal: !state.toggleDeleteModal
      };

    case types.LOG_OUT:
      return initialStatte;

    case types.LOG_IN:
      return {
        firstName: action.user.firstName,
        lastName: action.user.lastName,
        email: action.user.email
      };

    default:
      return state;
  }
};
