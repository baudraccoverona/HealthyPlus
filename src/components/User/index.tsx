import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import Button from '../../components/Shared/Button';
import {launchImageLibrary} from 'react-native-image-picker';
const User = () => {
  var ImagePicker = require('react-native-image-picker');

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button
          text={'Gallery'}
          onPress={async () => {
            await launchImageLibrary(
              {
                mediaType: 'photo',
                includeBase64: false,
                maxHeight: 200,
                maxWidth: 200,
              },
              (res: any) => {
                res.json();
                console.log({res});
              },
            );
          }}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button text={'Take Photo'} onPress={() => {}} />
      </View>
    </View>
  );
};

export default User;
