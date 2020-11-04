import {combineReducers} from 'redux';
import productsReducer from './productsReducer';
import filtersReducer from './filtersReducer';
import navigationReducer from './navigationReducer';

export default combineReducers({
  productsReducer,
  filtersReducer,
  navigationReducer,
});
