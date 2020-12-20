import axios from 'axios';
import {getUniqueId} from 'react-native-device-info';
import {GET_PRODUCTS, GET_SCANNED_PRODUCT} from '../types';

export const getProducts = (filter) => async (dispatch) => {
  try {
    console.log(filter);
    const res = await axios.get('https://crazye.herokuapp.com/api/product/', {
      params: {
        deviceId: getUniqueId(),
        filter,
      },
    });

    dispatch({
      type: GET_PRODUCTS,
      payload: res.data.found,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getScannedProduct = (barcode, categoryName) => async (
  dispatch,
) => {
  try {
    let filter = {barcode, categoryName};
    const res = await axios.get(`https://crazye.herokuapp.com/api/product/`, {
      params: {
        deviceId: getUniqueId(),
        filter,
      },
    });

    console.log(res.data);
    let found = 'not found';
    if (res.data.found.length > 0) {
      found = res.data.found[0];
    }

    console.log(found);

    dispatch({
      type: GET_SCANNED_PRODUCT,
      payload: found,
    });
  } catch (err) {
    console.log(err);
  }
};

export const resetScannedProduct = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_SCANNED_PRODUCT,
      payload: null,
    });
  } catch (err) {
    console.log(err);
  }
};
