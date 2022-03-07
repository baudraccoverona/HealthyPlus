import React from 'react';
import ClientsList from '../components/List/List';
import HomePage from '../components/Home/Home';
// import UserScreen from '../components/';
import LogIn from '../components/Login/Login';
import ClientForm from '../components/Form/Form';
// import WelcomePage from '../Components/Welcome/Welcome';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import IonIcons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Text, TouchableOpacity, View} from 'react-native';

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
                  <AntDesign name="back" size={20} />
                  <Text>Back</Text>
                </View>
              </TouchableOpacity>
            ),
            tabBarButton: () => null,
          })}
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
          {/* <Tab.Screen name="User" component={UserScreen} /> */}
        </Tab.Navigator>
      ) : (
        <Stack.Navigator>
          {/* <Stack.Screen name="Welcome" component={WelcomePage} /> */}
          <Stack.Screen name="LogIn">
            {() => <LogIn handleLogin={handleLogin} />}
          </Stack.Screen>
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default Navigator;
