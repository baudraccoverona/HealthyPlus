import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import List from '../components/List/List';
import Form from '../components/Form/Form';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

function getHeaderTitle(route: any) {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';

  switch (routeName) {
    case 'Form':
      return 'Client form';
  }
}

const ClientsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="List"
        component={List}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Form"
        component={Form}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default ClientsStack;
