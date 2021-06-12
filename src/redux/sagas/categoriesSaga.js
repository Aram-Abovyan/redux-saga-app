import axios from 'axios';
import * as types from '../types';
import { CATEGORIES_URL } from '../../api/urls';
import { put } from 'redux-saga/effects';

export function* getCategoriesAsync() {
  const payload = yield axios({
    method: 'GET',
    url: CATEGORIES_URL,
    headers: {
      'Content-Type': 'application/json',
    },
  })
  .then(res => res.data);

  yield put({
    type: types.CATEGORIES_ADDED,
    payload,
  })
}