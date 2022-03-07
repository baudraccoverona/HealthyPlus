import * as React from 'react';
import Home from '../components/Home/Home';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ClientsStack from '../navigators/ClientsStack';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
      <Tab.Screen
        name="List"
        component={ClientsStack}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
