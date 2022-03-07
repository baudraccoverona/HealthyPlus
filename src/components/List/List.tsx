import React, {useState, useEffect} from 'react';
import {
  View,
  FlatList,
  Text,
  ListRenderItem,
  TouchableOpacity,
} from 'react-native';
import styles from './List.component.style';
import User from '../../assets/img/account_circle_black_24dp(2).svg';
import Edit from '../../assets/img/edit_black_24dp (1).svg';
import Delete from '../../assets/img/delete_black_24dp.svg';
import Add from '../../assets/img/add_circle_black_24dp.svg';
import Toast from 'react-native-simple-toast';
import Props from '../Login/Login';
import {NavigationScreenProp} from 'react-navigation';

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
  const [isLoading, setLoading] = useState(true);
  const [usernameToEdit, setUsernameToEdit] = useState('');
  const [emailToEdit, setEmailToEdit] = useState('');
  const [nameToEdit, setNameToEdit] = useState('');
  const [idToEdit, setIdToEdit] = useState('');

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
    navigation.navigate('Form', {
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
    navigation.navigate('Form', {
      name: '',
      username: '',
      email: '',
      id: '',
    });
  };

  const Item: React.FC<Client> = ({name, id, email}) => (
    <View style={styles.item}>
      <User width={30} height={30} />
      <View style={styles.rightContainer}>
        <View style={styles.dataContainer}>
          <Text style={styles.data}>{name}</Text>
          <Text style={styles.data}>{email}</Text>
        </View>
        <View style={styles.icons}>
          <TouchableOpacity
            onPress={() => {
              handleEdit(id);
            }}>
            <Edit width={30} height={30} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              handleDelete(id);
            }}>
            <Delete width={30} height={30} />
          </TouchableOpacity>
        </View>
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
    <View>
      <Text>Loading...</Text>
    </View>
  ) : (
    <View style={styles.container}>
      <TouchableOpacity style={styles.addContainer} onPress={handleCreate}>
        <Add width={50} height={50} />
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
