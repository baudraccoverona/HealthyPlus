import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import List from './List';
import {useForm, Controller} from 'react-hook-form';

const Login = () => {
  const [isLogged, setIsLogged] = useState(false);

  const {control, handleSubmit} = useForm();

  const onSubmit = (data: any) => {
    setIsLogged(true);
  };

  return !isLogged ? (
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
            placeholder="email"
          />
        )}></Controller>
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
            placeholder="password"
          />
        )}></Controller>
      <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  ) : (
    <List></List>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight || 200,
    fontFamily: 'sans-serif',
  },
  input: {
    height: 40,
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 20,
    borderWidth: 1,
    padding: 10,
    borderTopColor: '#ffffff',
    borderLeftColor: '#ffffff',
    borderRightColor: '#ffffff',
    borderBottomColor: '#c06c84',
  },
  button: {
    backgroundColor: '#c06c84',
    borderRadius: 20,
    width: 300,
    height: 50,
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  buttonText: {
    textAlign: 'center',
    padding: 10,
    fontWeight: '700',
    color: '#ffffff',
    marginTop: 'auto',
    marginBottom: 'auto',
    fontSize: 16,
  },
});

export default Login;
