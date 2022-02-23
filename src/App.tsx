import React from 'react';
import {
  SafeAreaView,
  View,
  Text
} from 'react-native';
import List from './components/List';

const App = () => {

  return (
    <SafeAreaView>
      <View>
        <List />
        <Text>Hola</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;