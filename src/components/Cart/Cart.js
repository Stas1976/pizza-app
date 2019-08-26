import React from 'react';
import style from './index.module.scss';
import { connect } from 'react-redux';
import * as action from '../../actions/cartAction';

const Cart = ({
  cart,
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart,
  toggleToOrderConfirmation,
  hiddeDropDownCart
}) => {
  const itemsInCart = cart.map(item => {
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
      <li className={style.list} key={item.id}>
        <img className={style.image} src={item.image} alt="pica img" />
        <div className={style.info}>
          <span className={style.name}>{item.name}</span>
          <span className={style.size}>Size: {size}</span>
          <div className={style.counter}>
            <div
              onClick={() => removeItemFromCart(item)}
              className={style.plus}
            >
              -
            </div>
            {item.quantity}
            <div onClick={() => addItemToCart(item)} className={style.plus}>
              +
            </div>
          </div>
        </div>
        <div className={style.trash}>
          <div onClick={() => clearItemFromCart(item)} className={style.bin}>
            <i className="fas fa-trash-alt"></i>
          </div>
          <span className={style.price}>{item.quantity * item.price}€</span>
        </div>
      </li>
    );
  });
  return (
    <div className={style.container}>
      <ul>{itemsInCart}</ul>
      <button
        onClick={() => {
          toggleToOrderConfirmation();
          hiddeDropDownCart();
        }}
        className={style.btn}
      >
        Užsakyti
      </button>
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
)(Cart);
