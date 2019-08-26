import React, { Component } from 'react';
import style from './index.module.scss';
import * as action from '../../actions/cartAction';
import { connect } from 'react-redux';
import SelectPizzaSize from '../SelectPizzaSize/SelectPizzaSize';
import { db } from '../../assets/db/db';

class Modal extends Component {
  state = {
    pizzaSize: 's',
    popUp: false,
    info: false
  };

  selectPizzaSize = e => this.setState({ pizzaSize: e });

  popUpShow = e => this.setState({ popUp: true });

  infoToggle = () => this.setState({ info: !this.state.info });

  render() {
    const { info, popUp } = this.state;
    const { toggleOnOffModal, addItemToCart } = this.props;
    const { image, name, about } = this.props.selectedPica;
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
              <div onClick={this.infoToggle} className={style.infoIcon}>
                <i className="fas fa-info-circle"></i>
              </div>
              {info ? <div className={style.infoBlock}>Info:</div> : null}
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
              {this.state.popUp ? (
                <div className={style.popup}>
                  Pridėta: <span>{name}</span>
                </div>
              ) : null}
              <button
                onClick={() => {
                  addItemToCart(selectPizzaBySize[0]);
                  this.popUpShow();
                  setTimeout(() => {
                    this.setState({ popUp: false });
                  }, 800);
                }}
                className={style.btn}
              >
                Į Krėpšelį
              </button>
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
