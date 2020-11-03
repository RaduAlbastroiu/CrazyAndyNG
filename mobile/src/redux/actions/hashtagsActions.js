import axios from 'axios';
import {UPDATE_HASHTAGS} from '../types';
import {useSelector, useDispatch} from 'react-redux';

export const getHashtags = (filter) => async (dispatch, getState) => {
  try {
    const res = await axios.get('https://crazye.herokuapp.com/api/hashtag/', {
      params: {
        deviceId: 'someDeviceId',
        filter,
      },
    });

    console.log(getState());

    console.log(filter);
    console.log(res.data.length);

    const hashtags = res.data.map((hashtag) => {
      return {name: hashtag.name, isSelected: false};
    });

    dispatch({
      type: UPDATE_HASHTAGS,
      payload: hashtags,
    });
  } catch (err) {
    console.log(err);
  }
};

export const updateHashtags = (hashtag, hashtags) => async (dispatch) => {
  const index = hashtags.findIndex((element) => {
    return element.name === hashtag.name;
  });

  if (index >= 0) {
    hashtags[index] = hashtag;
  }

  dispatch({
    type: UPDATE_HASHTAGS,
    payload: hashtags,
  });
};
