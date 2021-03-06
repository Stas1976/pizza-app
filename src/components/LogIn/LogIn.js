import React from 'react';
import style from './index.module.scss';
import { connect } from 'react-redux';
import * as action from '../../actions/logInAction';

const LogIn = props => {
  return (
    <div className={style.container} onClick={props.toggleLogInModal}>
      <h4>Prisijungti</h4>
    </div>
  );
};

export default connect(
  null,
  action
)(LogIn);
