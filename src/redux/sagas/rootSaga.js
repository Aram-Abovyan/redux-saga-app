import { getImagesAsync, getMoreImagesAsync } from './imagesSaga';
import { getCategoriesAsync } from './categoriesSaga';

import { takeEvery, all } from 'redux-saga/effects';

export function* watchAll() {
  yield all([
    takeEvery('CATEGORIES_ADDED_ASYNC', getCategoriesAsync),
    takeEvery('IMAGES_ADDED_ASYNC', getImagesAsync),
    takeEvery('MORE_IMAGES_ADDED_ASYNC', getMoreImagesAsync),
  ]);
}
