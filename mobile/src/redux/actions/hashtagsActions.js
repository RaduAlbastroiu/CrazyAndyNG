import axios from 'axios';
import {GET_HASHTAGS} from '../types';

export const getHashtags = (filter) => async (dispatch) => {
  try {
    const res = await axios.get('https://crazye.herokuapp.com/api/hashtag/', {
      params: {
        deviceId: 'someDeviceId',
        filter,
      },
    });

    const hashtags = res.data.map((hashtag) => {
      return hashtag.name;
    });

    dispatch({
      type: GET_HASHTAGS,
      payload: hashtags,
    });
  } catch (err) {
    console.log(err);
  }
};
