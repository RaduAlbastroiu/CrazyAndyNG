import axios from 'axios';
import {GET_PRODUCTS} from '../types';

export const getProducts = (filter) => async (dispatch) => {
  console.log('A INTRAT');
  try {
    const res = await axios.get('https://crazye.herokuapp.com/api/product/', {
      params: {
        deviceId: 'someDeviceId',
        filter,
      },
    });

    console.log('A REUSIT');
    console.log(res);

    dispatch({
      type: GET_PRODUCTS,
      payload: res.data.found,
    });
  } catch (err) {
    console.log(err);
  }
};
