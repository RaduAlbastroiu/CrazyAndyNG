import axios from 'axios';
import {UPDATE_HASHTAGS, UPDATE_SEARCH_TEXT} from '../types';
import {useSelector, useDispatch} from 'react-redux';

export const updateSearchText = (text) => async (dispatch) => {
  dispatch({
    type: UPDATE_SEARCH_TEXT,
    payload: {searchText: text},
  });
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
