import React from 'react';
import style from './index.module.scss';
import * as action from '../../actions/cartAction';
import { connect } from 'react-redux';

const OrderCart = ({
  cartItems,
  removeItemFromCart,
  addItemToCart,
  clearItemFromCart
}) => {
  const cartItem = cartItems.cart.map(item => {
    let size = '';
    if (item.size === 's') {
      size = '25cm';
    } else if (item.size === 'm') {
      size = '30cm';
    } else if (item.size === 'l') {
      size = '35cm';
    } else {
      size = 'tradicinis';
    }

    return (
      <li key={item.id} className={style.container}>
        <div className={style.nameSize}>
          <span className={style.spn}>{item.name}</span>
          <span className={style.spn}>{size}</span>
        </div>

        <div className={style.counter}>
          <div onClick={() => removeItemFromCart(item)} className={style.plus}>
            -
          </div>
          {item.quantity}
          <div onClick={() => addItemToCart(item)} className={style.plus}>
            +
          </div>
        </div>

        <span className={style.price}>
          {(item.quantity * item.price).toFixed(2)}€
        </span>

        <div className={style.trash}>
          <div onClick={() => clearItemFromCart(item)} className={style.bin}>
            <i className="fas fa-trash-alt"></i>
          </div>
        </div>
      </li>
    );
  });
  return (
    <div>
      <ul>{cartItem}</ul>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    cartItems: state.cartReducer
  };
};

export default connect(
  mapStateToProps,
  action
)(OrderCart);
