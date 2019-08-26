import React from 'react';
import style from './index.module.scss';
import padazas from '../../assets/images/padazas.jpg';

const Padazas = () => {
  return (
    <div className={style.container}>
      <span className={style.spn}>Padažas</span>
      <button>Į krepšelį</button>
      <img src={padazas} alt="" />
    </div>
  );
};

export default Padazas;
