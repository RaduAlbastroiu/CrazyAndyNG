import {
  UPDATE_CATEGORIES,
  UPDATE_SELECTED_CATEGORY,
  UPDATE_HASHTAGS,
  UPDATE_SELECTED_HASHTAGS,
  UPDATE_SEARCH_TEXT,
} from '../types';

const initialState = {
  categories: ['Masks', 'Sanitizers', 'Others'],
  selectedCategory: 'Masks',
  hashtags: [''],
  selectedHashtags: [''],
  searchTest: '',
};

const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CATEGORIES:
      return {
        categories: action.payload.categories,
        selectedCategory: state.selectedCategory,
      };
    case UPDATE_SELECTED_CATEGORY:
      return {
        categories: state.categories,
        selectedCategory: action.payload,
      };
    case UPDATE_HASHTAGS:
      return {
        hashtags: action.payload,
      };
    default:
      return state;
  }
};

module.exports = filtersReducer;
