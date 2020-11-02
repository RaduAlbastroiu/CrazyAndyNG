import axios from 'axios';
import {UPDATE_CATEGORIES, UPDATE_SELECTED_CATEGORY} from '../types';

export const updateCategories = () => async (dispatch) => {
  try {
    const res = await axios.get('https://crazye.herokuapp.com/api/category', {
      params: {
        deviceId: 'someDeviceId',
      },
    });

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
