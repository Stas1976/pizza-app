import React, { Component } from 'react';
import style from './index.module.scss';
import onClickOutside from 'react-onclickoutside';

class Test extends Component {
  handleClickOutside = () => {
    console.log('onClicOutside() method calles');
  };

  render() {
    return (
      <div className={style.test}>
        <h3>Test</h3>
      </div>
    );
  }
}

export default onClickOutside(Test);
