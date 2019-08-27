import React from 'react';
import style from './index.module.scss';

const AdressInput = ({ nextStep }) => {
  return (
    <div>
      <form className={style.form}>
        <input type="text" placeholder="Gatvė" />
        <input type="text" placeholder="Namas" />
        <input type="text" placeholder="Butas" />
        <input type="text" placeholder="Durų kodas" />
        <input type="text" placeholder="Aukštas" />
        <input type="text" placeholder="Adreso pavadinimas" />
        <input type="tel" placeholder="Telefono numeris" />

        <textarea rows="4" cols="50" placeholder="Komentaras" />

        <button onClick={() => nextStep(2)}>Patvirtinti adresą</button>
      </form>
    </div>
  );
};

export default AdressInput;
