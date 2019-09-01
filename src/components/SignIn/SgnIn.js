import React from 'react';
import style from './index.module.scss';
import { connect } from 'react-redux';
import * as action from '../../actions/signUpAction';

const LogIn = props => {
  return (
    <div className={style.container} onClick={props.toggleSignUpModal}>
      <h4>Užsiregistruoti</h4>
    </div>
  );
};

export default connect(
  null,
  action
)(LogIn);
