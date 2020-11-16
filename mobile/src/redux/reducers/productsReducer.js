import {GET_PRODUCTS, GET_SCANNED_PRODUCT} from '../types';

const initialState = {
  products: [],
  scannedProduct: null,
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case GET_SCANNED_PRODUCT:
      return {
        ...state,
        scannedProduct: action.payload,
      };
    default:
      return state;
  }
};

module.exports = productsReducer;
