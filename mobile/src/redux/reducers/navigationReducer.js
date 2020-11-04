import {SHOW_BARCODE} from '../types';

const initialState = {
  showBarcode: true,
};

const navigationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_BARCODE:
      return {
        showBarcode: action.payload,
      };
    default:
      return state;
  }
};

module.exports = navigationReducer;
