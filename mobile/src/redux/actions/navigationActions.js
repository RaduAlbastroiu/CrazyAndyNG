import {SHOW_BARCODE} from '../types';

export const setShowBarcode = (showBarcode) => async (dispatch) => {
  try {
    dispatch({
      type: SHOW_BARCODE,
      payload: showBarcode,
    });
  } catch (err) {
    console.log(err);
  }
};
