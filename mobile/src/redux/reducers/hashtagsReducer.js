import {GET_HASHTAGS} from '../types';

const initialState = {
  hashtags: [],
};

const hashtagsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_HASHTAGS:
      return {
        hashtags: action.payload,
      };
    default:
      return state;
  }
};

module.exports = hashtagsReducer;
