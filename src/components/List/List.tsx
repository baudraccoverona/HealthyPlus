import React, {useState, useEffect} from 'react';
import {
  View,
  FlatList,
  Text,
  ListRenderItem,
  TouchableOpacity,
} from 'react-native';
import styles from './List.component.style';
import Toast from 'react-native-simple-toast';
import Props from '../Login/Login';
import {NavigationScreenProp} from 'react-navigation';
import IonIcons from 'react-native-vector-icons/Ionicons';

const url = 'https://jsonplaceholder.typicode.com/users';

export interface Client {
  name: string;
  id: string;
  email: string;
  username: string;
}

interface Props {
  navigation: NavigationScreenProp<any, 'List'>;
}

const List: React.FC<Props> = ({navigation}) => {
  const [clients, setClients] = useState<Client[]>([] as Client[]);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [usernameToEdit, setUsernameToEdit] = useState<string>('');
  const [emailToEdit, setEmailToEdit] = useState<string>('');
  const [nameToEdit, setNameToEdit] = useState<string>('');
  const [idToEdit, setIdToEdit] = useState<string>('');

  useEffect(() => {
    fetch(`${url}`)
      .then(response => response.json())
      .then(json => {
        setClients(json);
        setLoading(false);
      });
  }, []);

  const handleEdit = (id: string) => {
    let clientToEdit = clients.filter(x => {
      if (x.id === id) {
        return x;
      }
    });
    setUsernameToEdit(clientToEdit[0].username);
    setEmailToEdit(clientToEdit[0].email);
    setNameToEdit(clientToEdit[0].name);
    setIdToEdit(clientToEdit[0].id);
    navigation.navigate('ClientForm', {
      name: nameToEdit,
      username: usernameToEdit,
      email: emailToEdit,
      id: idToEdit,
    });
  };

  const handleDelete = (id: string) => {
    fetch(`${url}/${id}`, {
      method: 'DELETE',
    }).then(response => {
      if (response.status === 200) {
        var newClients = clients.filter(x => {
          return x.id != id;
        });
        setClients(newClients);
        Toast.show('Client deleted successfully');
      }
    });
  };

  const handleCreate = () => {
    navigation.navigate('ClientForm', {
      name: '',
      username: '',
      email: '',
      id: '',
    });
  };

  const Item: React.FC<Client> = ({name, id, email}) => (
    <View style={styles.itemContainer}>
      <View style={styles.leftContainer}>
        <IonIcons name={'person-circle'} size={40} />
        <View style={styles.dataContainer}>
          <Text style={styles.data}>{name}</Text>
          <Text style={styles.data}>{email}</Text>
        </View>
      </View>
      <View style={styles.icons}>
        <TouchableOpacity
          onPress={() => {
            handleEdit(id);
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

  return isLoading ? (
    <View style={styles.container}>
      <Text style={styles.loading}>Loading...</Text>
    </View>
  ) : (
    <View style={styles.container}>
      <TouchableOpacity style={styles.addContainer} onPress={handleCreate}>
        <IonIcons name={'ios-add-circle'} size={54} />
      </TouchableOpacity>
      <FlatList
        data={clients}
        renderItem={RenderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default List;
