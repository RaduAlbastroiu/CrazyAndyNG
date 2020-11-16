import {SHOW_BARCODE} from '../types';
import {SHOW_PRODUCT_LOADING} from '../types';

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

export const setShowProductLoading = (showProductLoading) => async (
  dispatch,
) => {
  try {
    dispatch({
      type: SHOW_PRODUCT_LOADING,
      payload: showProductLoading,
    });
  } catch (err) {
    console.log(err);
  }
};
