import {GET_PRODUCTS} from '../types';

const initialState = {
  products: [],
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        products: action.payload,
      };
    default:
      return state;
  }
};

module.exports = productsReducer;
