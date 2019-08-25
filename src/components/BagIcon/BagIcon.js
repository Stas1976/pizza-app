import React from 'react';
import style from './index.module.scss';
import { connect } from 'react-redux';
import * as action from '../../actions/cartAction';

const BagIcon = ({ toggleDropDownCart, itemsQuantity }) => {
  const itemsInCart = itemsQuantity.cart.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);
  return (
    <div onClick={toggleDropDownCart} className={style.container}>
      <div className={style.name}>Krepšelis </div>
      <span className={style.divider}>|</span>
      <span className={style.itemCount}>{itemsInCart}</span>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    itemsQuantity: state.cartReducer
  };
};

export default connect(
  mapStateToProps,
  action
)(BagIcon);
