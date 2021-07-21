import * as actionTypes from './types';

export const getProducts = () => ({
  type: actionTypes.GET_PRODUCTS,
});

export const getProductsSuccess = (products: Array<any>) => ({
  type: actionTypes.GET_PRODUCTS_SUCCESS,
  payload: products,
});

export const getProductsApiError = (error: string) => ({
  type: actionTypes.GET_PRODUCTS_API_ERROR,
  payload: error,
});
