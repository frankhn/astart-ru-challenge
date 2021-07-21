import React, {useEffect, useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import updateObject from '../helpers/updateObject';
import {AppState} from '../redux';
import Order from './order';
import ProductItem from './productItem';
import {getProducts} from './store/actions';

const initialState = {
  order: null,
  active: false,
};

const Products = () => {
  const [state, setState] = useState(initialState);

  const dispatch = useDispatch();

  const {products, loading, error} = useSelector(
    (state: AppState) => state.products,
  );

  useEffect(() => {
    dispatch(getProducts());
    if (products) {
      console.log('products available');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const openCheckout = (_item: any) =>
    setState(updateObject(state, {order: _item, active: true}));

  const handleCloseCheckout = () =>
    setState(updateObject(state, {active: false}));
  return (
    <>
      {loading && loading ? (
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 60,
          }}>
          <Text>Loading orders</Text>
        </View>
      ) : products && products ? (
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            paddingVertical: 20,
          }}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={products}
            renderItem={item => (
              <ProductItem _product={item} handleClick={openCheckout} />
            )}
            keyExtractor={(item: {id: any}) => `${item.id}`.toString()}
          />
        </View>
      ) : error && error ? (
        <Text>error</Text>
      ) : null}

      {products && products && state.order !== null ? (
        <Order
          order={state.order}
          onCloseHandler={handleCloseCheckout}
          active={state.active && state.order !== null}
        />
      ) : null}
    </>
  );
};

export default Products;
