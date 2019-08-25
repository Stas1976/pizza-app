import React from 'react';
import style from './index.module.scss';

const EmptyDropDownCart = () => {
  return (
    <div className={style.container}>
      <h3>Oj, tuščia!</h3>
      <div>
        Pas mus pristatymas visada nemokamas, tačiau minimali užsakymo suma turi
        būti 7,95 €
      </div>
    </div>
  );
};

export default EmptyDropDownCart;
