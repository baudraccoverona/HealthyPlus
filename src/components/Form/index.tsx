import React, {useEffect, useContext} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import styles from './styles';
import {useForm, Controller, SubmitHandler} from 'react-hook-form';
import {Client as IClient} from '../List';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../types/types';
import {AppPermissionsContext} from '../../context';

const url = 'https://jsonplaceholder.typicode.com/users';

type Props = NativeStackScreenProps<RootStackParamList, 'ClientForm'>;
const Edit = ({navigation, route}: Props) => {
  const clientContextProvider = useContext(AppPermissionsContext);

  const {
    control: control,
    handleSubmit: handleSubmit,
    setValue,
  } = useForm<IClient>();

  const onSubmit: SubmitHandler<IClient> = data => {
    if (route.params?.client) {
      clientContextProvider?.updateClient({
        ...route.params.client,
        ...data,
      });
    } else {
      clientContextProvider?.createClient(data);
    }
    navigation.goBack();
  };

  useEffect(() => {
    setValue('name', route.params?.client?.name || '');
    setValue('email', route.params?.client?.email || '');
    setValue('username', route.params?.client?.username || '');
  }, [route, setValue]);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: route.params?.client ? 'Edit Client' : 'Add New Client',
    });
  }, [navigation, route.params?.client]);

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
