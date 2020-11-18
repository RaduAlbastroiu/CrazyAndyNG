import axios from 'axios';
import {getUniqueId} from 'react-native-device-info';
import ProductCatalog from '../../components/ProductCatalog';
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
        deviceId: getUniqueId(),
      },
    });

    const categories = res.data.map((cat) => {
      return cat.name;
    });

    dispatch({
      type: UPDATE_CATEGORIES,
      payload: {categories, selectedCategory: categories[0]},
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
        deviceId: getUniqueId(),
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

export const updateSelectedHashtags = (selectedHashtag) => async (
  dispatch,
  getState,
) => {
  const selectedHashtags = getState().filtersReducer.selectedHashtags;
  let newSelectedHashtags = [...selectedHashtags];

  if (newSelectedHashtags != undefined) {
    const indexOf = newSelectedHashtags.indexOf(selectedHashtag);
    if (indexOf >= 0) {
      newSelectedHashtags.splice(indexOf, 1);
    } else {
      newSelectedHashtags.push(selectedHashtag);
    }
  } else {
    newSelectedHashtags = [selectedHashtag];
  }

  dispatch({
    type: UPDATE_SELECTED_HASHTAGS,
    payload: {selectedHashtags: newSelectedHashtags},
  });
};

export const updateSearchText = (text) => async (dispatch) => {
  dispatch({
    type: UPDATE_SEARCH_TEXT,
    payload: {searchText: text},
  });
};
