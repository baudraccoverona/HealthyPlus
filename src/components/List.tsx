import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, ListRenderItem } from 'react-native';

interface Client {
    name: string,
    id: string,
    email: string
}

const List = () => {
    const [clients, setClients] = useState<Client[]>([] as Client[]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then((json) => {
                setClients(json);
            })
    }, []);

    const Item: React.FC<Client> = (({ name, id, email }) => (
        <View style={styles.item}>
            <Text>{name}</Text>
            <Text>{id}</Text>
            <Text>{email}</Text>
        </View>
    ));
    const RenderItem: ListRenderItem<Client> = ({ item }) => (
        <Item name={item.name} id={item.id} email={item.email}  />
    );

    return (
        <FlatList
            data={clients}
            renderItem={RenderItem}
            keyExtractor={item => item.id}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    }
});

export default List;