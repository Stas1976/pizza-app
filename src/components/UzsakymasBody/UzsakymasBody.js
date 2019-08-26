import React from 'react';
import style from './index.module.scss';
import OrderCart from '../OrderCart/OrderCart';
import { connect } from 'react-redux';
import Padazas from '../Padazas/Padazas';

const UzsakymasBody = ({ showCart }) => {
  return (
    <div className={style.container}>
      <h2 className={style.head}>Krepšelis</h2>
      <hr className={style.hr} />
      {showCart.cart.length > 0 ? (
        <OrderCart />
      ) : (
        <div>Pridėkite ką nors iš meniu</div>
      )}

      <hr className={style.hr} />
      <Padazas />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    showCart: state.cartReducer
  };
};

export default connect(mapStateToProps)(UzsakymasBody);
