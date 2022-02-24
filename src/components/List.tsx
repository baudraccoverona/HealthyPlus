import React, {useState, useEffect} from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  ListRenderItem,
  ActivityIndicator,
} from 'react-native';

interface Client {
  name: string;
  id: string;
  email: string;
}

const List = () => {
  const [clients, setClients] = useState<Client[]>([] as Client[]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => {
        setClients(json);
      });
    setLoading(false);
  }, []);

  const Item: React.FC<Client> = ({name, id, email}) => (
    <View style={styles.item}>
			<Text style={styles.data}>Id: {id}</Text>
      <Text style={styles.data}>Name: {name}</Text>
      <Text style={styles.data}>Email: {email}</Text>
    </View>
  );
  const RenderItem: ListRenderItem<Client> = ({item}) => (
    <Item name={item.name} id={item.id} email={item.email} />
  );

  return (
		isLoading ? (
    <ActivityIndicator />
  ) : (
    <View>
      <Text style={styles.title}>Clients</Text>
      <FlatList
        data={clients}
        renderItem={RenderItem}
        keyExtractor={item => item.id}
      />
    </View>
  ));
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0
  },
  item: {
		borderColor: '#c06c84',
		borderWidth: 1.5,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
  },
  data: {
    fontWeight: '700',
    padding: 10,
    fontSize: 14,
  },
  title: {
    fontWeight: '700',
    textAlign: 'center',
    padding: 10,
    fontSize: 20,
  },
});

export default List;
