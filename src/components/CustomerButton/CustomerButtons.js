import React from 'react';
import style from './index.module.scss';

const CustomerButtons = ({ children }) => {
  return <button className={style.btn}>{children}</button>;
};

export default CustomerButtons;
