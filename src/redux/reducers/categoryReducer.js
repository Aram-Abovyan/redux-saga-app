import * as types from '../types';

// const initialState = [
//   {
//     "id": 5,
//     "name": "boxes"
//   },
//   {
//     "id": 15,
//     "name": "clothes"
//   },
//   {
//     "id": 1,
//     "name": "hats"
//   },
// ];

export default function categoryReducer(state = [], action) {
  switch (action.type) {
    case types.CATEGORIES_ADDED:
      return [...action.payload];
    default:
      return state;
  }
}