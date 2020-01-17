import { all } from 'redux-saga/effects';

import categorySagas from 'store/category/sagas';

export default function* rootSaga() {
  yield all([
    categorySagas(),
  ]);
};