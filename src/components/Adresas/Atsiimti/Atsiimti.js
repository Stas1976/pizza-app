import React from 'react';
import style from './index.module.scss';

const Atsiimti = () => {
  return (
    <div className={style.container}>
      <div className={style.adress1}>
        <input type="radio" />
        <h5>Antakalnio g. 41</h5>
        <div>
          Antakalnio g., 41 Pr - Kt: 09:00 — 23:00 Pn - Š: 09:00 — 00:00 S :
          09:00 — 23:00
        </div>
      </div>
      <div className={style.adress2}>
        <input type="radio" />
        <h5>Savanorių pr. 1, Helios City</h5>
        Savanorių pr., 1 Pr - Kt: 09:00 — 23:00 Pn - Š: 09:00 — 00:00 S : 09:00
        — 23:00
      </div>
      <input type="button" value="Pasirinkti" />
    </div>
  );
};

export default Atsiimti;
