import React from 'react';
import style from './index.module.scss';

const DeleteProfileModal = () => {
  return (
    <React.Fragment>
      <div className={style.backdrop} />
      <div className={style.container}>
        <h4>Ar Jus tikrain noritė ištrinti savo paskyrą</h4>
        <div className={style.form}>
          <button className={style.btn} onClick={back}>
            Ne
          </button>
          <button className={style.btn} onClik={deleteProfile}>
            Taip
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default DeleteProfileModal;
