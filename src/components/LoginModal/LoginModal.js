import React from 'react';
import style from './index.module.scss';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as action from '../../actions/logInAction';

const LogIn = ({ auth, logIn }) => {
  return (
    <React.Fragment>
      <div onClick={props.toggleLogInModal} className={style.backdrop} />
      <div className={style.container}>
        <h4>Prisijungti</h4>
        <form className={style.form} onSubmit={e => logIn(e, auth, history)}>
          <input className={style.input} type="email" placeholder="Email..." />
          <input
            className={style.input}
            type="password"
            placeholder="password"
          />
          <button className={style.btn}>Prisijungti</button>
        </form>
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
  return { auth: state.signUpReduser };
};

export default connect(
  mapStateToProps,
  action
)(LogIn);
