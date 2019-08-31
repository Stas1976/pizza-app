import React from 'react';
import style from './index.module.scss';
import { connect } from 'react-redux';
import * as action from '../../actions/authAction';

const LogIn = props => {
  return (
    <div className={style.container} onClick={props.toggleAuthModal}>
      <h4>Prisijungti</h4>
    </div>
  );
};

export default connect(
  null,
  action
)(LogIn);
