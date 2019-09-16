import * as types from './types';
import axios from 'axios';
import jwt from 'jsonwebtoken';

const url = 'https://692803.s.dedikuoti.lt:5000/api/auth/';
const urldel = 'https://692803.s.dedikuoti.lt:5000/api/profile';
export const toggleSignUpModal = () => {
  return {
    type: types.TOGGLE_SIGNUP_MODAL
  };
};

export const onInputChange = e => {
  return {
    type: types.AUTH_INPUT_CHANG,
    name: e.target.name,
    value: e.target.value
  };
};

export const signUp = (e, user, history) => {
  e.preventDefault();

  const errors = {};
  if (!user.firstName) errors.firstName = 'Missing first name';
  if (!user.lastName) errors.lastName = 'Missing last name';
  if (!user.email) errors.email = 'Missing email';
  if (!user.password) errors.password = 'Missing password';
  if (Object.keys(errors).length) {
    return {
      type: types.AUTH_ERROR,
      errors
    };
  }

  return async dispatch => {
    try {
      const res = await axios.post(url + 'signup', user);

      //isaugom JWT token to local storage
      localStorage.setItem('word_auth_token', res.data);

      axios.defaults.headers.common['Authorization'] = 'Berrer ' + res.data;

      dispatch({
        type: types.LOG_IN,
        user
      });
      history.push('/picos');
    } catch (e) {
      console.log(e.response);
    }
  };
};

// export const deleteProfile = (profile, history) => {
//   console.log(profile);
// };

export const logIn = (e, user, history) => {
  e.preventDefault();

  const errors = {};
  if (!user.email) errors.email = 'missing email';
  if (!user.password) errors.password = 'missing password';
  if (Object.keys(errors).length) {
    return {
      type: types.AUTH_ERROR,
      errors
    };
  }

  return async dispatch => {
    try {
      const res = await axios.post(url + 'login', user);
      const userData = jwt.decode(res.data);
      dispatch({
        type: types.LOG_IN,
        user: userData
      });

      localStorage.setItem('word_auth_token', res.data);

      axios.defaults.headers.common['Authorization'] = 'Berrer ' + res.data;
      history.push('/picos');
    } catch (error) {
      console.log(error.res);

      dispatch({
        type: types.AUTH_ERROR,
        errors: { email: 'Invalid email or password' }
      });
    }
  };
};

export const logOut = history => {
  localStorage.removeItem('word_auth_token');
  delete axios.defaults.headers.common['Authorization'];
  // history.push('/');
  return {
    type: types.LOG_OUT
  };
};

export const toggleDeleteProfileModal = () => {
  return {
    type: types.TOGGLE_DELETE_PROFILE_MODAL
  };
};

export const deleteProfile = _id => {
  return async function(dispatch) {
    try {
      const res = await axios.delete(urldel);
      localStorage.removeItem('word_auth_token', res.data);
      axios.defaults.headers.common['Authorization'] = 'Berrer ' + res.data;
      dispatch({
        type: types.DELETE_PROFILE,
        _id
      });
    } catch (error) {
      console.log(error.response);
    }
  };
};
