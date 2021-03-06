import React from 'react';
import style from './index.module.scss';
import { connect } from 'react-redux';
import * as action from '../../actions/signUpAction';

const SignUpModal = ({ signUp, auth, onInputChange, history }) => {
  const { firstName, lastName, email, password, errors } = auth;
  return (
    <React.Fragment>
      <div className={style.container}>
        <form className={style.form} onSubmit={e => signUp(e, auth, history)}>
          {errors.firstName && <p className={style.p}>Missing First Name</p>}
          <input
            name="firstName"
            value={firstName}
            className={style.input}
            type="text"
            placeholder="Vardas..."
            onChange={onInputChange}
          />
          {errors.lastName && <p className={style.p}>Missing Last Name</p>}
          <input
            name="lastName"
            value={lastName}
            className={style.input}
            type="text"
            placeholder="Pavardė..."
            onChange={onInputChange}
          />
          {errors.email && <p className={style.p}>Missing email</p>}
          <input
            name="email"
            value={email}
            className={style.input}
            type="email"
            placeholder="Email..."
            onChange={onInputChange}
          />
          {errors.password && <p className={style.p}>Missing password</p>}
          <input
            name="password"
            value={password}
            className={style.input}
            type="password"
            placeholder="password"
            onChange={onInputChange}
          />
          <button className={style.btn}>Sukurti paskyrą</button>
        </form>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.signUpReducer
  };
};

export default connect(
  mapStateToProps,
  action
)(SignUpModal);
