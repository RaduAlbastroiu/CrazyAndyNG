import axios from 'axios';
import {GET_FAVORITES} from '../types';

export const getFavorites = (deviceId) => async (dispatch) => {
  try {
    const res = await axios.get(
      `https://crazye.herokuapp.com/api/favorites/${deviceId}`,
      {
        params: {
          deviceId: 'someDeviceId',
        },
      },
    );

    dispatch({
      type: GET_FAVORITES,
      payload: res.data.found,
    });
  } catch (err) {
    console.log(err);
  }
};

export const addToFavorites = (deviceId, productId) => async (dispatch) => {
  try {
    let res = await axios.put(
      `https://crazye.herokuapp.com/api/favorites/${deviceId}?deviceId=${deviceId}`,
      {
        add: productId,
      },
    );

    dispatch(getFavorites(deviceId));
  } catch (err) {
    console.log(err);
  }
};

export const removeFromFavorites = (deviceId, productId) => async (
  dispatch,
) => {
  try {
    let res = await axios.put(
      `https://crazye.herokuapp.com/api/favorites/${deviceId}?deviceId=${deviceId}`,
      {
        params: {
          deviceId: 'someDeviceId',
        },
        remove: productId,
      },
    );

    dispatch(getFavorites(deviceId));
  } catch (err) {
    console.log(err);
  }
};
