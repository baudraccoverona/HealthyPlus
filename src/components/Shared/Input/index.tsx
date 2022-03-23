import React from 'react';
import {TextInput} from 'react-native';
import styles from './styles';

interface Props {
  onBlur: any;
  onChangeText: any;
  value: any;
  autoCapitalize: 'none' | 'sentences' | 'words' | 'characters' | undefined;
  placeholder: string;
  secureTextEntry?: boolean;
  testID?: string;
}

const Input = (props: Props) => {
  return (
    <TextInput
      style={styles.input}
      onBlur={props.onBlur}
      onChangeText={props.onChangeText}
      value={props.value}
      autoCapitalize={props.autoCapitalize}
      placeholder={props.placeholder}
      secureTextEntry={props.secureTextEntry}
      testID={props.testID}
    />
  );
};

export default Input;
