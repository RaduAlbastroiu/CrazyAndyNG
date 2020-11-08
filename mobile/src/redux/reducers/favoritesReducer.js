import products from '../../screens/MockupData';
import {GET_FAVORITES} from '../types';

const initialState = {
  products: [],
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FAVORITES:
      return {
        products: action.payload.products,
      };
    default:
      return state;
  }
};

module.exports = productsReducer;
