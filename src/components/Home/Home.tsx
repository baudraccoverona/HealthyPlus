import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.healthy}> HEALTHY PLUS</Text>
      <Text style={styles.title}>Welcome!</Text>
    </View>
  );
};

export default HomeScreen;
