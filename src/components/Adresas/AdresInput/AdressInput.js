import React from 'react';
import style from './index.module.scss';
import { connect } from 'react-redux';
import * as action from '../../../actions/addressAction';

const AdressInput = ({
  nextStep,
  addressInput,
  addressInputChange,
  addressSubmit
}) => {
  const {
    street,
    house,
    room,
    code,
    floor,
    addressName,
    telNumber,
    comments
  } = addressInput;
  return (
    <form
      onSubmit={e => {
        addressSubmit(e, addressInput);
        nextStep(2);
      }}
      className={style.container}
    >
      <div className={style.street}>
        <input
          type="text"
          name="street"
          value={street}
          onChange={addressInputChange}
          className={style.streetName}
          placeholder="Gatvė"
        />
        <input
          type="text"
          name="house"
          value={house}
          onChange={addressInputChange}
          className={style.homeNr}
          placeholder="Namas"
        />
      </div>
      <div className={style.room}>
        <input
          type="text"
          name="room"
          value={room}
          onChange={addressInputChange}
          className={style.roomNr}
          placeholder="Butas"
        />
        <input
          type="text"
          name="code"
          value={code}
          onChange={addressInputChange}
          className={style.roomNr}
          placeholder="Durų kodas"
        />
        <input
          type="text"
          name="floor"
          value={floor}
          onChange={addressInputChange}
          className={style.roomNr}
          placeholder="Aukštas"
        />
      </div>
      <div className={style.adressName}>
        <input
          type="text"
          name="addressName"
          value={addressName}
          onChange={addressInputChange}
          className={style.tel}
          placeholder="Adreso pavadinimas"
        />

        <input
          type="text"
          name="telNumber"
          value={telNumber}
          onChange={addressInputChange}
          className={style.tel}
          placeholder="Telefono numeris"
        />
      </div>

      <textarea
        name="comments"
        value={comments}
        onChange={addressInputChange}
        className={style.comment}
        rows="4"
        cols="50"
        placeholder="Komentaras"
      />

      <button className={style.btn}>Patvirtinti adresą</button>
    </form>
  );
};

const mapStateToProps = state => {
  return {
    addressInput: state.addressReducer
  };
};

export default connect(
  mapStateToProps,
  action
)(AdressInput);
