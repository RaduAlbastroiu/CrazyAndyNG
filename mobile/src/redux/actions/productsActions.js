import axios from 'axios';
import {getUniqueId} from 'react-native-device-info';
import {GET_PRODUCTS} from '../types';

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
