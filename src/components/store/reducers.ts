import updateObject from '../../helpers/updateObject';
import {Action} from '../../redux/interfaces';
import * as actionTypes from './types';

const initialState = {
  loading: false,
};

export const products = (state = initialState, action: Action) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCTS:
      return updateObject(state, {
        loading: true,
        products: [],
        error: undefined,
      });
    case actionTypes.GET_PRODUCTS_SUCCESS:
      return updateObject(state, {
        loading: false,
        products: action.payload,
      });
    case actionTypes.GET_PRODUCTS_API_ERROR:
      return updateObject(state, {
        loading: false,
        error: action.payload,
      });
    default:
      return state;
  }
};
