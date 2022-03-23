import React from 'react';
import {View, Text} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import styles from './styles';
import Toast from 'react-native-simple-toast';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Button from '../Shared/Button';
import Input from '../Shared/Input';

export const storeData = async (value: Data) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('@storage_Key', jsonValue);
  } catch (e) {}
};

interface Data {
  email: string;
  password: string;
}

type LoginProps = {
  handleLogin: () => void;
  testID?: string;
};

const user = {
  email: 'test@test.com.ar',
  password: 'test123',
};

const Login = ({handleLogin, testID}: LoginProps) => {
  const {control, handleSubmit} = useForm<Data>({
    defaultValues: {
      email: user.email,
      password: user.password,
    },
  });

  const onSubmit = (data: Data) => {
    if (user.email !== data.email && user.password !== data.password) {
      return Toast.show('Invalid credentials, try again.');
    }
    if (user.email !== data.email) {
      return Toast.show('Invalid user, try again.');
    }
    if (user.password !== data.password) {
      return Toast.show('Invalid password, try again.');
    }
    storeData(data);
    handleLogin();
  };

  return (
    <View style={styles.container} testID={testID}>
      <Controller
        control={control}
        name="email"
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <Input
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            autoCapitalize="none"
            placeholder="Email"
            secureTextEntry={undefined}
          />
        )}
      />
      <Controller
        control={control}
        name="password"
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <Input
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            autoCapitalize="none"
            placeholder="Password"
            secureTextEntry={true}
          />
        )}
      />
      <Button text={'Log in'} onPress={handleSubmit(onSubmit)} />
      <View style={styles.signUpContainer}>
        <Text>Don't have an account?</Text>
        <Text style={styles.signUp}>Sign up</Text>
      </View>
    </View>
  );
};

export default Login;
