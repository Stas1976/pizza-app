import React from 'react';
import logo from '../../assets/logo/pizza.png';
import { connect } from 'react-redux';
import * as action from '../../actions/cartAction';
import style from './index.module.scss';

const UzsakymasHead = ({ toggleToOrderConfirmation, activeStep }) => {
  return (
    <div className={style.header}>
      <img
        onClick={toggleToOrderConfirmation}
        src={logo}
        alt="logo"
        className={style.image}
      />
      <div className={style.steps}>
        <div className={activeStep === 0 ? style.active : style.cart}>
          <span className={style.number}>1</span>
          <span>Krepšelis</span>
        </div>
        <div className={activeStep === 1 ? style.active : style.cart}>
          <span className={style.number}>2</span>
          <span>Adreso patvirtinimas</span>
        </div>
        <div className={activeStep === 2 ? style.active : style.cart}>
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
