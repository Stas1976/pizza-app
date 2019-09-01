import * as types from '../actions/types';

const initialStatte = {
  firstName: '',
  lastName: '',
  email: ''
};

export default (state = initialStatte, action) => {
  switch (action.type) {
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
