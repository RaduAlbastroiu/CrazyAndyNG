import axios from 'axios';
import {UPDATE_CATEGORIES} from '../types';

export const updateCategories = () => async (dispatch) => {
  console.log('did dispatch');

  try {
    const res = await axios.get(
      'http://localhost:5000/api/category/?deviceId=someDeviceId',
    );

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
