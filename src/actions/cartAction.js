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
