import React from 'react';
import ClientsList from '../components/List';
import HomePage from '../components/Home';
import User from '../components/User';
import LogIn from '../components/Login';
import ClientForm from '../components/Form';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import IonIcons from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity, View} from 'react-native';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

type NavigatorProps = {
  handleLogin: () => void;
  logged: boolean;
};

const Navigator = ({handleLogin, logged}: NavigatorProps) => {
  function ClientsStackScreen() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="ClientsList"
          component={ClientsList}
          options={{title: 'Clients'}}
        />
        <Stack.Screen
          name="ClientForm"
          component={ClientForm}
          options={({navigation}) => ({
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.goBack(null)}
                style={{paddingRight: 70}}>
                <View style={{alignItems: 'center', paddingLeft: 10}}>
                  <IonIcons
                    name="arrow-back-outline"
                    size={25}
                    testID={'go-back'}
                  />
                </View>
              </TouchableOpacity>
            ),
            tabBarButton: () => null,
          })}
        />
      </Stack.Navigator>
    );
  }

  function UserStackScreen() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="UserAccount"
          component={User}
          options={{title: 'Account'}}
        />
      </Stack.Navigator>
    );
  }

  return (
    <NavigationContainer>
      {logged ? (
        <Tab.Navigator
          screenOptions={({route}) => ({
            headerShown: false,
            tabBarIcon: ({focused, color, size}) => {
              if (route.name === 'Home') {
                return (
                  <IonIcons
                    name={focused ? 'home' : 'home-outline'}
                    size={size}
                    color={color}
                  />
                );
              } else if (route.name === 'Clients') {
                return (
                  <IonIcons
                    name={focused ? 'list' : 'list-outline'}
                    size={size}
                    color={color}
                  />
                );
              } else if (route.name === 'User') {
                return (
                  <IonIcons
                    name={focused ? 'person' : 'person-outline'}
                    size={size}
                    color={color}
                  />
                );
              }
            },
            tabBarActiveTintColor: '#191970',
            tabBarInactiveTintColor: 'gray',
          })}>
          <Tab.Screen name="Home" component={HomePage} />
          <Tab.Screen name="Clients" component={ClientsStackScreen} />
          <Tab.Screen name="User" component={UserStackScreen} />
        </Tab.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen name="LogIn">
            {() => <LogIn handleLogin={handleLogin} />}
          </Stack.Screen>
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default Navigator;
