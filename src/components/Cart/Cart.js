import React from 'react';
import style from './index.module.scss';
import { connect } from 'react-redux';
import { addItemToCart } from '../../actions/cartAction';

const Cart = ({ selectPizzaBySize, test }) => {
  return (
    <div>
      <button onClick={console.log(selectPizzaBySize)} className={style.btn}>
        Į Krėpšelį
      </button>
    </div>
  );
};

export default connect(
  null,
  addItemToCart
)(Cart);
