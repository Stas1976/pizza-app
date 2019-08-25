import React from 'react';
import style from './index.module.scss';
import { connect } from 'react-redux';
import * as action from '../../actions/cartAction';
import EmptyDropDownCart from '../EmptyDropDownCart/EmptyDropDownCart';
import Cart from '../Cart/Cart';

const CartDropDown = ({ cart, hiddeDropDownCart }) => {
  const SumOfOrder = cart.reduce((acc, curr) => {
    return acc + curr.price * curr.quantity;
  }, 0);

  return (
    <div className={style.container}>
      <div onClick={hiddeDropDownCart} className={style.close}>
        <i className="fas fa-times" />
      </div>
      {cart.length > 0 ? <Cart /> : <EmptyDropDownCart />}
      <hr />
      <div className={style.orderSum}>Užsakymo suma: {SumOfOrder}€</div>
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
)(CartDropDown);
