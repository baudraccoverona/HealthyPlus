import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';

interface Props {
  onPress: any;
  text: string;
  testID?: string;
}

const Button = (props: Props) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={props.onPress}
      testID={props.testID}>
      <Text style={styles.buttonText}>{props.text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
