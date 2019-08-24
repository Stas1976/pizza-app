import React from 'react';
import style from './index.module.scss';
import { ReactComponent as Bag } from '../../assets/cartIcon/shopping-bag.svg';
import { connect } from 'react-redux';
import * as action from '../../actions/cartAction';

const BagIcon = ({ toggleDropDownCart }) => {
  return (
    <div onClick={toggleDropDownCart} className={style.cartIcon}>
      <Bag className={style.shoppingIcon} />
      <span className={style.itemCount}>0</span>
    </div>
  );
};

export default connect(
  null,
  action
)(BagIcon);
