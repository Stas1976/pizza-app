import * as types from '../actions/types';

const initialState = {
  toggleModal: true,
  selectedPica: {},
  cart: [],
  toggleDropDownCart: true
};

const itemsCart = (state = initialState, action) => {
  switch (action.type) {
    case types.HIDDE_DROP_DOWN_CART:
      return { ...state, toggleDropDownCart: true };
    case types.TOGGLE_BAG_ICON:
      return { ...state, toggleDropDownCart: !state.toggleDropDownCart };
    case types.ADD_ITEM_TO_CART:
      return { ...state, cart: [...state.cart, action.payload] };
    case types.TOGGLE_MODAL:
      return { ...state, toggleModal: !state.toggleModal };
    case types.SELECTED_PICA:
      return { ...state, selectedPica: action.payload };
    default:
      return state;
  }
};

export default itemsCart;
