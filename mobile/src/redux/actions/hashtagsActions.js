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

    console.log(res.data);
    const hashtags = res.data.map((hashtag) => {
      return hashtag.name;
    });

    dispatch({
      type: UPDATE_HASHTAGS,
      payload: hashtags,
    });
  } catch (err) {
    console.log(err);
  }
};
