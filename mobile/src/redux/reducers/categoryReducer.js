const initialState = {
  categories: ['Masks', 'Sanitizers', 'Others'],
  selectedCategory: '',
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_CATEGORIES':
      console.log('did update');
      console.log(action);
      return {
        categories: action.payload,
        selectedCategory: state.selectedCategory,
      };
    default:
      return state;
  }
};

module.exports = categoryReducer;
