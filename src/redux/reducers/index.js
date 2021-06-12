import { combineReducers } from 'redux';
import categoryReducer from './categoryReducer';
import imageReducer from './imageReducer';
import currentCategoryReducer from './currentCategoryReducer';

const rootReducer = combineReducers({
  categories: categoryReducer,
  images: imageReducer,
  currentCategory: currentCategoryReducer,
});

export default rootReducer;