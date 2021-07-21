/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Dimensions,
  ImageBackground,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import Products from './src/components/products';
import colors from './src/helpers/colors';
import store, {persistor} from './src/redux';

const {width, height} = Dimensions.get('window');

const image = require('./src/assets/bg.png');

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaView style={backgroundStyle}>
          <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
          <View
            style={{
              paddingHorizontal: 20,
              backgroundColor: 'transparent',
              position: 'absolute',
              marginTop: (height * 8) / 100,
              zIndex: 1000,
            }}>
            <Feather name={'menu'} size={50} />
          </View>
          <ImageBackground
            source={image}
            resizeMode="cover"
            style={styles.image}
          />
          <View
            style={{
              paddingHorizontal: 20,
              backgroundColor: colors.lightGrey,
              position: 'absolute',
              bottom: 0,
              zIndex: 1000,
              width: width,
              height: (height * 50) / 100,
              borderTopLeftRadius: 30,
              borderTopRightRadius: 30,
              paddingVertical: 30,
            }}>
            <Text style={{fontSize: 25}}>Список заказов</Text>
            <Products />
          </View>
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
};

const styles = StyleSheet.create({
  image: {
    marginTop: 15,
    width: width,
    height: height,
  },
});

export default App;
