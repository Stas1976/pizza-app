import React from 'react';
import logo from '../../assets/logo/pizza.png';
import { connect } from 'react-redux';
import * as action from '../../actions/cartAction';
import style from './index.module.scss';

const UzsakymasHead = ({ toggleToOrderConfirmation }) => {
  return (
    <div className={style.header}>
      <img
        onClick={toggleToOrderConfirmation}
        src={logo}
        alt="logo"
        className={style.image}
      />
      <div className={style.steps}>
        <div className={style.cart}>
          <span className={style.number}>1</span>
          <span>Krepšelis</span>
        </div>
        <div className={style.cart}>
          <span className={style.number}>2</span>
          <span>Užsakymas</span>
        </div>
        <div className={style.cart}>
          <span className={style.number}>3</span>
          <span>Užsakymas priimtas</span>
        </div>
      </div>
    </div>
  );
};

export default connect(
  null,
  action
)(UzsakymasHead);
