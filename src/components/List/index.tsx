import React, {useContext} from 'react';
import {
  View,
  FlatList,
  Text,
  ListRenderItem,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import Props from '../Login';
import {NavigationScreenProp} from 'react-navigation';
import IonIcons from 'react-native-vector-icons/Ionicons';
import {AppPermissionsContext} from '../../context';

export interface Client {
  id: number;
  name: string;
  email: string;
  username: string;
}

interface Props {
  navigation: NavigationScreenProp<any, 'List'>;
  testID?: string;
}

const List: React.FC<Props> = ({navigation, testID}) => {
  const clientContextProvider = useContext(AppPermissionsContext);

  const handleUpdate = (
    id: number,
    name: string,
    username: string,
    email: string,
  ) => {
    navigation.navigate('ClientForm', {
      id,
      name,
      username,
      email,
    });
  };

  const handleDelete = (id: number) => {
    clientContextProvider?.deleteClient(id);
  };

  const handleCreate = () => {
    navigation.navigate('ClientForm');
  };

  const Item: React.FC<Client> = ({name, id, email, username}) => (
    <View style={styles.itemContainer}>
      <View style={styles.leftContainer}>
        <IonIcons name={'person-circle'} size={40} />
        <View style={styles.dataContainer}>
          <Text style={styles.name}>{name}</Text>
          <Text>{email}</Text>
        </View>
      </View>
      <View style={styles.icons}>
        <TouchableOpacity
          onPress={() => {
            handleUpdate(id, name, username, email);
          }}>
          <IonIcons style={styles.icon} name={'pencil-sharp'} size={26} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            handleDelete(id);
          }}>
          <IonIcons style={styles.icon} name={'trash'} size={26} />
        </TouchableOpacity>
      </View>
    </View>
  );
  const RenderItem: ListRenderItem<Client> = ({item}) => (
    <Item
      name={item.name}
      id={item.id}
      email={item.email}
      username={item.username}
    />
  );

  return (
    <View style={styles.container} testID={testID}>
      <TouchableOpacity
        style={styles.addContainer}
        onPress={handleCreate}
        testID={'add-form'}>
        <IonIcons name={'ios-add-circle'} size={54} />
      </TouchableOpacity>
      <FlatList
        data={clientContextProvider?.clients}
        renderItem={RenderItem}
        keyExtractor={item => item.id.toString()}
        refreshing={false}
        onRefresh={() => clientContextProvider?.getClients()}
      />
    </View>
  );
};

export default List;
