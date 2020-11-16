import {SHOW_BARCODE} from '../types';
import {SHOW_PRODUCT_LOADING} from '../types';
import {SHOW_PRODUCT_NOT_FOUND} from '../types';

const initialState = {
  showBarcode: true,
  showProductLoading: false,
  showProductNotFound: false,
};

const navigationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_BARCODE:
      return {
        ...state,
        showBarcode: action.payload,
      };
    case SHOW_PRODUCT_LOADING:
      return {
        ...state,
        showProductLoading: action.payload,
      };
    case SHOW_PRODUCT_NOT_FOUND:
      return {
        ...state,
        showProductNotFound: action.payload,
      };
    default:
      return state;
  }
};

module.exports = navigationReducer;
