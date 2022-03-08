export interface ClientType {
    id: number,
    name: string,
    username: string,
    email: string
}

export interface iClientContext {
    clients: ClientType[] | null;
    loading: boolean;
    deleteClient: (id: number) => void;
    createClient: (client: ClientType) => void;
    updateClient: (client: ClientType) => void;
    getClients: () => void;
  }

  export type RootStackParamList = {
    Login: undefined;
    Home: undefined;
    Welcome: undefined;
    ClientsList: undefined;
    ClientForm?: {
      client?: ClientType;
    };
  };