import { all, call, put, takeLatest } from 'redux-saga/effects';
import * as api from 'api';
import * as definitions from 'store/category/definitions';

export function* fetchCategories(action) {
  try {
    const filter = action.payload;
    const payload = yield call(api.fetch, 'jokes/categories', filter);
    yield put({ type: definitions.FETCH_CATEGORIES_FULFILLED, payload });
  } catch (error) {
    yield put({ type: definitions.FETCH_CATEGORIES_REJECTED, error });
  }
}

export function* fetchCategory(action) {
  try {
    const filter = action.payload;
    const payload = yield call(api.fetch, 'jokes/random', filter);
    yield put({ type: definitions.FETCH_CATEGORY_FULFILLED, payload });
  } catch (error) {
    yield put({ type: definitions.FETCH_CATEGORY_REJECTED, error });
  }
}

export default function* rootSaga() {
  yield all([
    takeLatest(definitions.FETCH_CATEGORIES, fetchCategories),
    takeLatest(definitions.FETCH_CATEGORY, fetchCategory),
  ]);
}