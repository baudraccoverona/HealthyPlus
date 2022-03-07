import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import styles from './Login.component.style';
import Toast from 'react-native-simple-toast';
import {NavigationScreenProp} from 'react-navigation';

interface Props {
  navigation: NavigationScreenProp<any, 'Login'>;
  reset: NavigationScreenProp<any, 'Login'>;
}

const Login: React.FC<Props> = ({navigation}) => {
  const {control, handleSubmit} = useForm();

  const onSubmit = (data: any) => {
    Toast.show('Credentials validated');
    navigation.navigate('BottomTabNavigator');
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
