import React from 'react';
import {Dimensions} from 'react-native';
import {Text, TouchableOpacity, View} from 'react-native';
import colors from '../helpers/colors';

const {width} = Dimensions.get('screen');

const ProductItem = ({_product, handleClick}: any) => {
  console.log(_product);
  return (
    <>
      <TouchableOpacity
        onPress={() => handleClick(_product)}
        style={{
          width: (width * 50) / 100,
          backgroundColor: colors.white,
          marginRight: 10,
          borderRadius: 8,
          paddingVertical: 10,
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 20,
          }}>
          <Text style={{fontSize: 20}}>{_product.item.id}</Text>
          <Text style={{fontSize: 20, color: colors.green}}>
            {_product.item.sale}
          </Text>
        </View>
        <Text
          style={{
            fontSize: 15,
            borderBottomWidth: 1,
            borderBottomColor: colors.gray,
            color: colors.blue,
            marginVertical: 15,
            paddingHorizontal: 20,
          }}>
          {_product.item.number}
        </Text>
        <View
          style={{
            paddingVertical: 25,
            borderTopWidth: 1,
            borderTopColor: colors.gray,
          }}>
          <Text
            style={{
              paddingHorizontal: 20,
              fontSize: 15,
            }}>
            ∙ товаров 5 шт.
          </Text>
          <Text
            style={{
              paddingHorizontal: 20,
              fontSize: 15,
            }}>
            ∙ наименований 3 шт
          </Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default ProductItem;
