import React from 'react';
import style from './index.module.scss';
import padazas from '../../assets/images/padazas.jpg';
import { connect } from 'react-redux';
import * as action from '../../actions/cartAction';
import { db } from '../../assets/db/db';

class Padazas extends React.Component {
  render() {
    const { addItemToCart } = this.props;
    const padazas = db.Padazas.map(item => {
      return (
        <li key={item.id}>
          {item.name}
          {item.about}
          {item.price}
          <button onClick={() => addItemToCart(item)}>Į krepšelį</button>
        </li>
      );
    });

    return (
      <div className={style.container}>
        <span className={style.spn}>Padažas</span>
        <ul>{padazas}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ketcupQuantity: state.cartReducer
  };
};

export default connect(
  mapStateToProps,
  action
)(Padazas);
