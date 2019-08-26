import * as types from '../actions/types';
import { addItemsToCart, removeItemFromCart } from './reducer.utils';

const initialState = {
  toggleModal: true,
  selectedPica: {},
  cart: [],
  toggleDropDownCart: true,
  toggleToOrderConfirmation: false
};

const itemsCart = (state = initialState, action) => {
  switch (action.type) {
    case types.TOGGLE_TO_ORDER_CONFIRMATION:
      return {
        ...state,
        toggleToOrderConfirmation: !state.toggleToOrderConfirmation
      };
    case types.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload.id)
      };
    case types.REMOVE_ITEM_FROM_CART:
      return { ...state, cart: removeItemFromCart(state.cart, action.payload) };
    case types.HIDDE_DROP_DOWN_CART:
      return { ...state, toggleDropDownCart: true };
    case types.TOGGLE_BAG_ICON:
      return { ...state, toggleDropDownCart: !state.toggleDropDownCart };
    case types.ADD_ITEM_TO_CART:
      return { ...state, cart: addItemsToCart(state.cart, action.payload) };
    case types.TOGGLE_MODAL:
      return { ...state, toggleModal: !state.toggleModal };
    case types.SELECTED_PICA:
      return { ...state, selectedPica: action.payload };
    default:
      return state;
  }
};

export default itemsCart;
