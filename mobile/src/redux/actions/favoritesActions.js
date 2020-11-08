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
