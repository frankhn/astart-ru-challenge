import {takeEvery, fork, put, all, call} from 'redux-saga/effects';

//#region Local imports
import {GET_PRODUCTS} from './types';
import {getProductsSuccess, getProductsApiError} from './actions';
import {getRequest} from '../../redux/api';

/**
 * Pament
 */
/* eslint-disable @typescript-eslint/no-unused-vars */
function* products({type: GET_PRODUCTS}: any): any {
  try {
    const response = yield call(getRequest, '/api/orders.php');
    yield put(getProductsSuccess(response));
    console.log(response);
  } catch (error) {
    yield put(getProductsApiError(error.response.data));
  }
}

export function* watchProducts() {
  yield takeEvery(GET_PRODUCTS, products);
}

function* productsSaga() {
  yield all([fork(watchProducts)]);
}
export default productsSaga;
