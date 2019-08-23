import React from 'react';
import style from './index.module.scss';
import { db } from '../../assets/db/db';
import CustomeButton from '../../components/CustomerButton/CustomerButtons';

const Picos = () => {
  const pizza = db.Picos.filter(pizza => {
    return pizza.size === 's';
  }).map(pizza => (
    <li key={pizza.id} className={style.menuItem}>
      <div className={style.itemImg}>
        <img src={pizza.image} alt="pica" />
      </div>
      <div className={style.itemName}>{pizza.name}</div>
      <span className={style.about}>{pizza.about}</span>
      <div className={style.footer}>
        <span className={style.price}>{pizza.price}</span>
        <CustomeButton className={style.customeButton}>
          Pasirinkti
        </CustomeButton>
      </div>
    </li>
  ));

  return (
    <div className={style.container}>
      <div className={style.title}>
        <h3>Picos</h3>
      </div>

      <ul className={style.menuContainer}>{pizza}</ul>
    </div>
  );
};

export default Picos;
