import React from 'react';
import style from './index.module.scss';
import { db } from '../../assets/db/db';
import CustomeButton from '../../components/CustomerButton/CustomerButtons';
import { connect } from 'react-redux';
import Modal from '../../components/ModalOther/OtherModal';
import * as action from '../../actions/cartAction';

const Uzkandziai = props => {
  const {
    toggleOnOffModal,
    showModal,
    selectedPicaAction,
    hiddeDropDownCart
  } = props;

  const uzkandis = db.Uzkandziai.map(uzkandis => (
    <li key={uzkandis.id} className={style.menuItem}>
      <div
        className={style.itemImg}
        onClick={() => {
          selectedPicaAction(uzkandis);
          toggleOnOffModal();
          hiddeDropDownCart();
        }}
      >
        <img src={uzkandis.image} alt="uzkandis" />
      </div>
      <div className={style.itemInfo}>
        <div className={style.itemName}>{uzkandis.name}</div>
        <span className={style.about}>{uzkandis.about}</span>
        <div className={style.footer}>
          <span className={style.price}>kaina {uzkandis.price} €</span>
          <CustomeButton
            onClick={() => {
              selectedPicaAction(uzkandis);
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
        <h3>Užkandžiai</h3>
      </div>

      <ul className={style.menuContainer}>{uzkandis}</ul>
      {showModal ? null : <Modal>Užkandžiai</Modal>}
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
)(Uzkandziai);
