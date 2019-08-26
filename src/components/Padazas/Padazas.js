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
        <li key={item.id} className={style.list}>
          <img className={style.image} src={item.image} alt="Ketchup" />
          <div className={style.about}>
            <div>{item.name}</div>
            <div>{item.about}</div>
            <div> Kaina: {item.price}€</div>
          </div>

          <button className={style.btn} onClick={() => addItemToCart(item)}>
            Į krepšelį
          </button>
        </li>
      );
    });

    return (
      <div className={style.container}>
        <span className={style.spn}>Padažas</span>
        <ul className={style.ul}>{padazas}</ul>
        <hr className={style.hr} />
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
