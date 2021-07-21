import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import colors from '../helpers/colors';
//#region
import BottomPopUp from './popup';
interface IOrderProps {
  active: boolean;
  order: any;
  onCloseHandler: any;
}

const Order = ({active, order, onCloseHandler}: IOrderProps) => {
  return (
    <BottomPopUp active={active} onlySmall={true} closeHandler={onCloseHandler}>
      <>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 20,
            paddingTop: 5,
          }}>
          <Text style={{fontSize: 20}}>{order.item.id}</Text>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 20,
          }}>
          <Text style={{fontSize: 18, color: colors.green}}>
            {new Date(order.item.date).toUTCString()}
          </Text>
        </View>
        <View
          style={{
            paddingHorizontal: 20,
            paddingTop: 5,
          }}>
          <Text style={{fontSize: 25, fontWeight: '700', paddingTop: 20}}>
            Товар
          </Text>
          <Text style={{fontSize: 18, color: colors.gray, paddingTop: 10}}>
            Название наименование товара
          </Text>
        </View>
        {order && order.item.goods
          ? order.item.goods.map((item: any) => (
              <View
                nativeID={`${item.id}${Math.floor(
                  Math.random() * 1000,
                )}`.toString()}
                style={{
                  backgroundColor: colors.lightGrey,
                  marginVertical: 10,
                  marginHorizontal: 20,
                  padding: 20,
                  borderRadius: 8,
                  display: 'flex',
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                }}>
                <View>
                  <Text>{item.name}</Text>
                  <Text>{item.id}</Text>
                </View>
                <View>
                  <Text style={{color: colors.blue}}>{item.price} P</Text>
                </View>
              </View>
            ))
          : null}
        <View
          style={{
            borderTopColor: colors.gray,
            borderTopWidth: 2,
            marginTop: 20,
            marginHorizontal: 20,
          }}>
          <Text style={{marginTop: 20}}>Скидка по заказу составила 77 %</Text>

          <TouchableOpacity
            style={{
              padding: 10,
              backgroundColor: colors.blue,
              marginTop: 10,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 5,
            }}>
            <Text
              style={{
                color: colors.white,
                fontSize: 25,
              }}>
              ИТОГО : 45 986.77
            </Text>
          </TouchableOpacity>
        </View>

        <Text style={{marginTop: 20, marginHorizontal: 20}}>
          Дата выдачи заказа 10 дней с момента оплаты
        </Text>
      </>
    </BottomPopUp>
  );
};

export default Order;
