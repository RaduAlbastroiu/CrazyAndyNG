import {combineReducers} from 'redux';
import productsReducer from './productsReducer';
import filtersReducer from './filtersReducer';

export default combineReducers({
  productsReducer,
  filtersReducer,
});
