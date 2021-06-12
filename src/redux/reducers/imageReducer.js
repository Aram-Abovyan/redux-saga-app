import * as types from '../types';

export default function imageReducer(state = [], action) {
  switch (action.type) {
    case types.IMAGES_ADDED:
      return [...action.payload];

    case types.MORE_IMAGES_ADDED:
      return [...state, ...action.payload];

    default:
      return state;
  }
}