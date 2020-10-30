import {UPDATE_CATEGORIES, UPDATE_SELECTED_CATEGORY} from '../types';

const initialState = {
  categories: ['Masks', 'Sanitizers', 'Others'],
  selectedCategory: 'kjn',
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CATEGORIES:
      return {
        categories: action.payload,
        selectedCategory: state.selectedCategory,
      };
    case UPDATE_SELECTED_CATEGORY:
      return {
        categories: state.categories,
        selectedCategory: action.payload,
      };
    default:
      return state;
  }
};

module.exports = categoryReducer;
