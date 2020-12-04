import {UPDATE_COMPARISON} from '../types';

export const updateComparison = (products) => async (dispatch) => {
  try {
    console.log('-----');
    console.log(products);
    console.log('-----');
    dispatch({
      type: UPDATE_COMPARISON,
      payload: products,
    });
  } catch (err) {
    console.log(err);
  }
};
