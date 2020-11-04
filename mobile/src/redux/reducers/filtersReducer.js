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
  hashtags: [],
  selectedHashtags: [],
  searchText: '',
};

const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CATEGORIES:
      return {
        ...state,
        categories: action.payload.categories,
        selectedCategory: action.payload.selectedCategory,
      };
    case UPDATE_SELECTED_CATEGORY:
      return {
        ...state,
        selectedCategory: action.payload.selectedCategory,
      };
    case UPDATE_HASHTAGS:
      return {
        ...state,
        hashtags: action.payload.hashtags,
        selectedHashtags: action.payload.selectedHashtags,
      };
    case UPDATE_SELECTED_HASHTAGS:
      return {
        ...state,
        selectedHashtags: action.payload.selectedHashtags,
      };
    case UPDATE_SEARCH_TEXT:
      return {
        ...state,
        searchText: action.payload.searchText,
      };
    default:
      return state;
  }
};

module.exports = filtersReducer;
