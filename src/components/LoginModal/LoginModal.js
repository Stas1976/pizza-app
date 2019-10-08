import React from 'react';
import style from './index.module.scss';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as action from '../../actions/signUpAction';
import GoogleAuth from '../GoogleAuth/GoogleAuth';

const LogIn = ({ auth, logIn, history, onInputChange }) => {
  const { email, password } = auth;
  return (
    <React.Fragment>
      <div className={style.container}>
        <h4>Prisijungti</h4>
        <form className={style.form} onSubmit={e => logIn(e, auth, history)}>
          <input
            name="email"
            value={email}
            className={style.input}
            type="email"
            placeholder="Email..."
            onChange={onInputChange}
          />
          <input
            name="password"
            value={password}
            className={style.input}
            type="password"
            placeholder="password"
            onChange={onInputChange}
          />
          <button className={style.btn}>Prisijungti</button>
        </form>
        {/* <GoogleAuth /> */}
        <div className={style.link}>
          <h4>Neturitė pskyros?</h4>
          <Link to="/signup" className={style.linkNewAccount}>
            Sukurti paskyra
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return { auth: state.signUpReducer };
};

export default connect(
  mapStateToProps,
  action
)(LogIn);
