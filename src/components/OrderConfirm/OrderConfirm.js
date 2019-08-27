import React from 'react';
import style from './index.module.scss';
import { connect } from 'react-redux';
import * as action from '../../actions/cartAction';

const OrderConfirm = ({ cart, nextStep, toggleToOrderConfirmation }) => {
  const SumOfOrder = cart.reduce((acc, curr) => {
    return acc + curr.price * curr.quantity;
  }, 0);

  return (
    <div className={style.container}>
      <h3 className={style.orderSum}>
        Užsakymo suma: {SumOfOrder.toFixed(2)}€
      </h3>
      <div className={style.btnBlock}>
        <button className={style.btn} onClick={toggleToOrderConfirmation}>
          Atgal į meniu
        </button>

        <button
          className={style.active}
          onClick={
            cart.length <= 0
              ? alert('Pridėkite ką nors į krepšelį')
              : () => nextStep(1)
          }
        >
          Toliau
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  const { cart } = state.cartReducer;
  return { cart };
};

export default connect(
  mapStateToProps,
  action
)(OrderConfirm);
