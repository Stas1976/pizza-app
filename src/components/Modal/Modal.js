import React, { Component } from 'react';
import style from './index.module.scss';
import * as action from '../../actions/cartAction';
import { connect } from 'react-redux';
import SelectPizzaSize from '../SelectPizzaSize/SelectPizzaSize';
import { db } from '../../assets/db/db';
import Cart from '../../components/Cart/Cart';

class Modal extends Component {
  state = {
    pizzaSize: 's'
  };

  selectPizzaSize = e => this.setState({ pizzaSize: e });

  render() {
    const { toggleOnOffModal } = this.props;
    const { image, name, about, price, size, id } = this.props.selectedPica;
    const selectPizzaBySize = db.Picos.filter(pizza => {
      return (
        this.props.selectedPica.name === pizza.name &&
        this.state.pizzaSize === pizza.size
      );
    });

    return (
      <React.Fragment>
        <div onClick={toggleOnOffModal} className={style.backdrop} />
        <div className={style.container}>
          <div onClick={toggleOnOffModal} className={style.close}>
            <i className="fas fa-times" />
          </div>
          <div className={style.image}>
            <img src={image} alt="pica" />
          </div>
          <div className={style.info}>
            <div className={style.top}>
              <div className={style.name}>{name}</div>
              <div className={style.about}>{about}</div>
            </div>
            <div className={style.footer}>
              <dir className={style.selectBtn}>
                <div className={style.price}>{selectPizzaBySize[0].price}€</div>
                <SelectPizzaSize
                  selectPizzaSize={this.selectPizzaSize}
                  className={style.btnGroup}
                  pizzaSize={this.state.pizzaSize}
                />
              </dir>
              <Cart selectPizzaBySize={selectPizzaBySize[0]} />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  const { selectedPica } = state.cartReducer;
  return {
    selectedPica
  };
};

export default connect(
  mapStateToProps,
  action
)(Modal);
