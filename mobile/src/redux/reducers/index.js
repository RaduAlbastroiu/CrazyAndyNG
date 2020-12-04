import {combineReducers} from 'redux';
import productsReducer from './productsReducer';
import filtersReducer from './filtersReducer';
import navigationReducer from './navigationReducer';
import favoritesReducer from './favoritesReducer';
import comparisonReducer from './comparisonReducer';

export default combineReducers({
  productsReducer,
  filtersReducer,
  comparisonReducer,
  navigationReducer,
  favoritesReducer,
});
