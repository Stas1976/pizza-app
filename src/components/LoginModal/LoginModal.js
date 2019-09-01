import React from 'react';
import style from './index.module.scss';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as action from '../../actions/logInAction';

const SignUp = props => {
  return (
    <React.Fragment>
      <div onClick={props.toggleLogInModal} className={style.backdrop} />
      <div className={style.container}>
        <h4>Prisijungti</h4>
        <form className={style.form} onSubmit>
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

export default connect(
  null,
  action
)(SignUp);
