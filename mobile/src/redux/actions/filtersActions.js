import axios from 'axios';
import {
  UPDATE_CATEGORIES,
  UPDATE_SELECTED_CATEGORY,
  UPDATE_HASHTAGS,
  UPDATE_SELECTED_HASHTAGS,
  UPDATE_SEARCH_TEXT,
} from '../types';

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
      payload: {categories, selectedCategories: ''},
    });
  } catch (err) {
    console.log(err);
  }
};

export const updateCategory = (selectedCategory) => {
  return {
    type: UPDATE_SELECTED_CATEGORY,
    payload: {selectedCategory},
  };
};

export const updateHashtags = (filter) => async (dispatch) => {
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
      type: UPDATE_HASHTAGS,
      payload: {hashtags, selectedHashtags: []},
    });
  } catch (err) {
    console.log(err);
  }
};

export const updateSelectedHashtags = (selectedHashtags) => async (
  dispatch,
) => {
  dispatch({
    type: UPDATE_SELECTED_HASHTAGS,
    payload: {selectedHashtags},
  });
};

export const updateSearchText = (text) => async (dispatch) => {
  dispatch({
    type: UPDATE_SEARCH_TEXT,
    payload: {searchText: text},
  });
};
