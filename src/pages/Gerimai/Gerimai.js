import React from 'react';
import style from './index.module.scss';
import { db } from '../../assets/db/db';
import CustomeButton from '../../components/CustomerButton/CustomerButtons';
import { connect } from 'react-redux';
import Modal from '../../components/ModalOther/OtherModal';
import * as action from '../../actions/cartAction';

const Gerimai = props => {
  const {
    toggleOnOffModal,
    showModal,
    selectedPicaAction,
    hiddeDropDownCart
  } = props;

  const gerimai = db.Gerimai.map(gerimai => (
    <li key={gerimai.id} className={style.menuItem}>
      <div
        className={style.itemImg}
        onClick={() => {
          selectedPicaAction(gerimai);
          toggleOnOffModal();
          hiddeDropDownCart();
        }}
      >
        <img src={gerimai.image} alt="gerimai" />
      </div>
      <div className={style.itemInfo}>
        <div className={style.itemName}>{gerimai.name}</div>
        <span className={style.about}>{gerimai.about}</span>
        <div className={style.footer}>
          <span className={style.price}>kaina {gerimai.price} €</span>
          <CustomeButton
            onClick={() => {
              selectedPicaAction(gerimai);
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

      <ul className={style.menuContainer}>{gerimai}</ul>
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
)(Gerimai);
