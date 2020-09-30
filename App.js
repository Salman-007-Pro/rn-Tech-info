import React from 'react';
import {Provider} from 'react-redux';
import store from './src/Redux/Store';
import {View} from 'react-native';
import Header from './src/components/Header/Header';
import ListView from './src/components/ListView/ListView';
const App = () => {
  return (
    <Provider store={store}>
      <View style={{flex: 1}}>
        <Header title="Tech-Stack" />
        <ListView />
      </View>
    </Provider>
  );
};

export default App;
