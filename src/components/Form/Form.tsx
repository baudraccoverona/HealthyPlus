import React, {useState, useEffect, isValidElement} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import styles from './Form.component.style';
import {useForm, Controller} from 'react-hook-form';
import {Client, Client as IClient} from '../List/List';
import Toast from 'react-native-simple-toast';
import {NavigationScreenProp} from 'react-navigation';
import {RouteProp} from '@react-navigation/native';

const url = 'https://jsonplaceholder.typicode.com/users';

interface Props {
  navigation: NavigationScreenProp<any, 'Form'>;
  route: RouteProp<{params: Client}, 'params'>;
}

const Edit: React.FC<Props> = ({navigation, route}) => {
  const {control, handleSubmit} = useForm({
    defaultValues: {
      name: route.params?.name || '',
      email: route.params?.email || '',
      username: route.params?.username || '',
    },
  });
  const [clients, setClients] = useState<IClient[]>([] as IClient[]);

  useEffect(() => {
    fetch(`${url}`)
      .then(response => response.json())
      .then(json => {
        setClients(json);
      });
  }, []);

  const onSubmit = (data: any) => {
    if (route.params.id) {
      fetch(`${url}/${route.params.id}`, {
        method: 'PUT',
        body: JSON.stringify({
          id: route.params.id,
          email: route.params.email,
          name: route.params.name,
          username: route.params.username,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }).then(response => {
        if (response.status === 200) {
          Toast.show('Client updated successfully');
          navigation.navigate('List');
        }
      });
    } else {
      fetch(`${url}/${route.params.id}`, {
        method: 'POST',
        body: JSON.stringify({
          id: '',
          email: route.params.email,
          name: route.params.name,
          username: route.params.username,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }).then(response => {
        if (response.status === 201) {
          Toast.show('Client created successfully');
          navigation.navigate('List');
        }
      });
    }
  };

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        name="name"
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
            placeholder="Name"
          />
        )}
      />
      <Controller
        control={control}
        name="username"
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
            placeholder="Username"
          />
        )}
      />
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
      <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Edit;
