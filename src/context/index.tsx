import React, {FC, useState, useEffect} from 'react';
import {createContext} from 'react';
import {ClientType, iClientContext} from '../types/types';
import Toast from 'react-native-simple-toast';

export const AppPermissionsContext = createContext<iClientContext | null>(null);

const ClientContextProvider: FC = ({children}) => {
  const [clients, setClients] = useState<ClientType[]>([]);
  const [loading, setLoading] = useState(false);

  const getClients = () => {
    setLoading(true);
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(async response => await response.json())
      .then(response => {
        setClients(response);
        setLoading(false);
      })
      .catch(error => {
        error;
      });
  };

  useEffect(() => {
    getClients();
  }, []);

  const deleteClient = (id: number) => {
    setClients(prevClient => {
      Toast.show('Client deleted successfully.');
      return prevClient.filter(client => client.id !== id);
    });
  };

  const createClient = (client: ClientType) => {
    setClients([
      ...clients,
      {
        id: Math.max(...clients.map(o => o.id), 0) + 1,
        name: client.name,
        username: client.username,
        email: client.email,
      },
    ]);
    Toast.show('Client created successfully.');
  };

  const updateClient = (client: ClientType) => {
    setClients(
      clients.map(c => {
        if (c.id === client.id) {
          c.name = client.name;
          c.username = client.username;
          c.email = client.email;
        }
        return c;
      }),
    );
    Toast.show('Client updated successfully.');
  };

  return (
    <AppPermissionsContext.Provider
      value={{
        clients,
        loading,
        getClients,
        deleteClient,
        createClient,
        updateClient,
      }}>
      {children}
    </AppPermissionsContext.Provider>
  );
};

export default ClientContextProvider;
