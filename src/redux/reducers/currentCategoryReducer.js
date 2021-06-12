import * as types from '../types';

export default function currentCategoryReducer(state = {id: 5}, action) {
  switch (action.type) {
    case types.CURRENT_CATEGORY_ADDED:
      return ({
        ...action.payload,
      });

    default:
      return state;
  }
}