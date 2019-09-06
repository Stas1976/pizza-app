import React from 'react';
import style from './index.module.scss';
import { db } from '../../assets/db/db';
import CustomeButton from '../../components/CustomerButton/CustomerButtons';
import { connect } from 'react-redux';
import Modal from '../../components/ModalOther/OtherModal';
import * as action from '../../actions/cartAction';

const Desertai = props => {
  const {
    toggleOnOffModal,
    showModal,
    selectedPicaAction,
    hiddeDropDownCart
  } = props;

  const desertai = db.Desertai.map(desertai => (
    <li key={desertai.id} className={style.menuItem}>
      <div
        className={style.itemImg}
        onClick={() => {
          selectedPicaAction(desertai);
          toggleOnOffModal();
          hiddeDropDownCart();
        }}
      >
        <img src={desertai.image} alt="desertai" />
      </div>
      <div className={style.itemInfo}>
        <div className={style.itemName}>{desertai.name}</div>
        <span className={style.about}>{desertai.about}</span>
        <div className={style.footer}>
          <span className={style.price}>kaina {desertai.price} €</span>
          <CustomeButton
            onClick={() => {
              selectedPicaAction(desertai);
              toggleOnOffModal();
              hiddeDropDownCart();
            }}
            className={style.btn}
          >
            Pasirinkti
          </CustomeButton>
        </div>
      </div>
    </li>
  ));

  return (
    <div className={style.container}>
      <div className={style.title}>
        <h3>Gėrimai</h3>
      </div>

      <ul className={style.menuContainer}>{desertai}</ul>
      {showModal ? null : <Modal>Gėrimai</Modal>}
    </div>
  );
};

const mapStateToProps = state => {
  const { toggleModal } = state.cartReducer;
  return {
    showModal: toggleModal
  };
};

export default connect(
  mapStateToProps,
  action
)(Desertai);
