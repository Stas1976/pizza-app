import * as types from './types';

export const toggleOnOffModal = () => {
  return {
    type: types.TOGGLE_MODAL
  };
};

export const selectedPicaAction = payload => {
  return {
    type: types.SELECTED_PICA,
    payload
  };
};

export const addItemToCart = payload => {
  return {
    type: types.ADD_ITEM_TO_CART,
    payload
  };
};

export const toggleDropDownCart = () => {
  return {
    type: types.TOGGLE_BAG_ICON
  };
};

export const hiddeDropDownCart = () => {
  return {
    type: types.HIDDE_DROP_DOWN_CART
  };
};

export const removeItemFromCart = payload => {
  return {
    type: types.REMOVE_ITEM_FROM_CART,
    payload
  };
};

export const clearItemFromCart = payload => {
  return {
    type: types.CLEAR_ITEM_FROM_CART,
    payload
  };
};

export const clearCart = () => {
  return {
    type: types.CLEAR_CART
  };
};

export const toggleToOrderConfirmation = () => {
  return {
    type: types.TOGGLE_TO_ORDER_CONFIRMATION
  };
};
