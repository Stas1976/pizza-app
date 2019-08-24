import React from 'react';
import style from './index.module.scss';
import { db } from '../../assets/db/db';
import CustomeButton from '../../components/CustomerButton/CustomerButtons';
import { connect } from 'react-redux';
import Modal from '../../components/Modal/Modal';
import * as action from '../../actions/cartAction';

const Picos = props => {
  const { toggleOnOffModal, showModal, selectedPicaAction } = props;

  const pizza = db.Picos.filter(pizza => {
    return pizza.size === 's';
  }).map(pizza => (
    <li key={pizza.id} className={style.menuItem}>
      <div
        className={style.itemImg}
        onClick={() => {
          selectedPicaAction(pizza);
          toggleOnOffModal();
        }}
      >
        <img src={pizza.image} alt="pica" />
      </div>
      <div className={style.itemInfo}>
        <div className={style.itemName}>{pizza.name}</div>
        <span className={style.about}>{pizza.about}</span>
        <div className={style.footer}>
          <span className={style.price}>nuo {pizza.price} €</span>
          <CustomeButton
            onClick={() => {
              selectedPicaAction(pizza);
              toggleOnOffModal();
            }}
            className={style.customeButton}
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
        <h3>Picos</h3>
      </div>

      <ul className={style.menuContainer}>{pizza}</ul>
      {showModal ? null : <Modal>Pica</Modal>}
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
)(Picos);
