import axios from 'axios';
import {GET_PRODUCTS} from '../types';

export const getProducts = (filter) => async (dispatch) => {
  try {
    const res = await axios.get('https://crazye.herokuapp.com/api/product/', {
      params: {
        deviceId: 'someDeviceId',
        filter,
      },
    });

    console.log(res.data);
    const categories = res.data.map((cat) => {
      return cat.name;
    });

    dispatch({
      type: UPDATE_CATEGORIES,
      payload: categories,
    });
  } catch (err) {
    console.log(err);
  }
};

export const updateCategory = (selectedCategory) => {
  return {
    type: UPDATE_SELECTED_CATEGORY,
    payload: selectedCategory,
  };
};
