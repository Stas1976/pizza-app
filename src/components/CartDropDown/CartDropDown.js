import React from 'react';
import style from './index.module.scss';
import { connect } from 'react-redux';

const CartDropDown = ({ cart }) => {
  console.log(cart);
  const itemsInCart = cart.map(item => {
    let size = '';
    if (item.size === 's') {
      size = '25cm';
    } else if (item.size === 'm') {
      size = '30cm';
    } else {
      size = '35cm';
    }
    return (
      <li className={style.list} key={item.id}>
        <img className={style.image} src={item.image} alt="pica img" />
        <div className={style.info}>
          <span className={style.name}>{item.name}</span>
          <span className={style.size}>Size: {size}</span>
          <div className={style.counter}>
            <button className={style.plus}>-</button>0
            <button className={style.plus}>+</button>
          </div>
        </div>
        <div className={style.trash}>
          <div className={style.bin}>
            <i className="fas fa-trash-alt"></i>
          </div>
          <span className={style.price}>{item.price}€</span>
        </div>
      </li>
    );
  });
  return (
    <div className={style.container}>
      <ul>{itemsInCart}</ul>
      <hr />
      <div className={style.orderSum}>Užsakymo suma: 0</div>
    </div>
  );
};

const mapStateToProps = state => {
  const { cart } = state.cartReducer;
  return { cart };
};

export default connect(mapStateToProps)(CartDropDown);
