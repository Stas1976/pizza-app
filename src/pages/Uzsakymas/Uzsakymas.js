import React from 'react';
import style from './index.module.scss';
import { connect } from 'react-redux';
import * as action from '../../actions/cartAction';
import UzsakymasHead from '../../components/UzsakymasHead/UzsakymasHead';
import UzsakymasBody from '../../components/UzsakymasBody/UzsakymasBody';

const Uzsakymas = () => {
  return (
    <div className={style.container}>
      <UzsakymasHead />
      <hr />
      <UzsakymasBody />
    </div>
  );
};

// const mapStateToProps = state =>{
//   return{
//   toggleOrderPage: state.cartReducer.toggleToOrderConfirmation}}

export default connect(
  null,
  action
)(Uzsakymas);
