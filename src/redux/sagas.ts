import {all} from 'redux-saga/effects';
import productsSaga from '../components/store/saga';

export default function* rootSaga() {
  yield all([
    // public
    productsSaga(),
  ]);
}
