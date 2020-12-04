import {UPDATE_COMPARISON} from '../types';

const initialState = {
  products: [],
};

const comparisonReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_COMPARISON:
      return {
        products: action.payload,
      };
    default:
      return state;
  }
};

module.exports = comparisonReducer;
