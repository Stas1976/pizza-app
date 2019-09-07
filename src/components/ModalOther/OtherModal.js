import React, { Component } from 'react';
import style from './index.module.scss';
import * as action from '../../actions/cartAction';
import { connect } from 'react-redux';

class Modal extends Component {
  state = {
    popUp: false,
    info: false
  };

  popUpShow = e => this.setState({ popUp: true });

  infoToggle = () => this.setState({ info: !this.state.info });

  render() {
    const { info } = this.state;
    const { toggleOnOffModal, addItemToCart } = this.props;
    const { image, name, about } = this.props.selectedPica;

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
              {this.state.popUp ? (
                <div className={style.popup}>
                  Pridėta: <span>{name}</span>
                </div>
              ) : null}
              <button
                onClick={() => {
                  addItemToCart(this.props.selectedPica);
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
