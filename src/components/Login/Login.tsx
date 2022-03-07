import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import styles from './Login.component.style';
import Toast from 'react-native-simple-toast';
import {NavigationScreenProp} from 'react-navigation';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Props {
  navigation: NavigationScreenProp<any, 'Login'>;
}

interface Data {
  email: string;
  password: string;
}

type LoginProps = {
  handleLogin: () => void;
};

const user = {
  email: 'test@test.com.ar',
  password: 'test123',
};

const Login = ({handleLogin}: LoginProps) => {
  const {control, handleSubmit} = useForm<Data>({
    defaultValues: {
      email: user.email,
      password: user.password,
    },
  });

  const onSubmit = (data: Data) => {
    if (user.email !== data.email) {
      return Toast.show('Invalid user, try again.');
    }
    if (user.password !== data.password) {
      return Toast.show('Invalid password, try again.');
    }
    storeData(data);
    handleLogin();
  };

  const storeData = async (value: Data) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('@storage_Key', jsonValue);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        name="email"
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            autoCapitalize="none"
            placeholder="Email"
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
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            autoCapitalize="none"
            placeholder="Password"
            secureTextEntry={true}
          />
        )}
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
        <Text style={styles.buttonText}>Log in</Text>
      </TouchableOpacity>
      <View style={styles.signUpContainer}>
        <Text>Don't have an account?</Text>
        <Text style={styles.signUp}>Sign up</Text>
      </View>
    </View>
  );
};

export default Login;
