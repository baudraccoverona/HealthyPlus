import * as React from 'react';
import Home from '../components/Home/Home';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ClientsStack from '../navigators/ClientsStack';
import IonIcons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName: string;

          if (route.name === 'Home') {
            iconName = focused ? 'ios-home' : 'ios-home-outline';
          } else if (route.name === 'Clients') {
            iconName = focused ? 'ios-list' : 'ios-list-outline';
          }
          return <IonIcons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#191970',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
      <Tab.Screen
        name="Clients"
        component={ClientsStack}
        options={{headerShown: false, headerLeft: () => null}}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
