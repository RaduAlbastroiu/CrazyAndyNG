import {combineReducers} from 'redux';
import productsReducer from './productsReducer';
import filtersReducer from './filtersReducer';
import navigationReducer from './navigationReducer';
import favoritesReducer from './favoritesReducer';

export default combineReducers({
  productsReducer,
  filtersReducer,
  navigationReducer,
  favoritesReducer,
});
