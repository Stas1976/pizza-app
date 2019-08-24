import React from 'react';
import style from './index.module.scss';

const SelectPizzaSize = ({ selectPizzaSize, pizzaSize }) => {
  return (
    <div>
      <button
        onClick={() => {
          selectPizzaSize('s');
        }}
        className={pizzaSize === 's' ? style.active : style.btn}
      >
        25 cm
      </button>
      <button
        onClick={() => {
          selectPizzaSize('m');
        }}
        className={pizzaSize === 'm' ? style.active : style.btn}
      >
        30 cm
      </button>
      <button
        onClick={() => {
          selectPizzaSize('l');
        }}
        className={pizzaSize === 'l' ? style.active : style.btn}
      >
        35 cm
      </button>
    </div>
  );
};

export default SelectPizzaSize;
