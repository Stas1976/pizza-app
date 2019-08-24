import React from 'react';
import { btn } from './index.module.scss';

const CustomeButtons = ({ children, ...otherProps }) => {
  return (
    <button className={btn} {...otherProps}>
      {children}
    </button>
  );
};

export default CustomeButtons;
