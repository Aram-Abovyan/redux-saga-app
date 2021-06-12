import axios from 'axios';
import * as types from '../types';
import { put } from 'redux-saga/effects';

export function* getImagesAsync(action) {
  const images = yield axios({
    method: 'GET',
    url: action.payload.url,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  yield put({
    type: types.IMAGES_ADDED,
    payload: images.data,
  });
}

export function* getMoreImagesAsync(action) {
  const images = yield axios({
    method: 'GET',
    url: action.payload.url,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  yield put({
    type: types.MORE_IMAGES_ADDED,
    payload: images.data,
  })
}