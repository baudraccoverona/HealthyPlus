import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';

type HomeProps = {
  testID?: string;
};

const HomeScreen = ({testID}: HomeProps) => {
  return (
    <View style={styles.container} testID={testID}>
      <Text style={styles.healthy}> HEALTHY PLUS</Text>
      <Text style={styles.title}>Welcome!</Text>
    </View>
  );
};

export default HomeScreen;
