import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Entypo, FontAwesome, Ionicons } from '@expo/vector-icons';


import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Payment from '../screens/Payment';
import Chat from '../screens/Chat';
import ChatScreen from '../screens/Chat/chatScreen';
import DetailRoom from '../screens/Room/DetailRoom';


export type StackParamsList = {
  Home: undefined
  MyRooms: undefined
  Profile: undefined
  Settings: undefined
  DetailRoom: undefined
  ChatScreen: undefined

};
const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();

const primary = "rgb(243 244 246)"

const TabBar = () => {
  return (

    <Tab.Navigator
      // initialRouteName='Home'
      initialRouteName='Home'
      activeColor={'#7678e8'}
      shifting
      backBehavior='history'
      inactiveColor={'#c3c4d0'}
      barStyle={{
        backgroundColor: primary,

      }}
    >
      <Tab.Screen
        name='Home'
        component={Home}

        options={{
          tabBarLabel: 'Home',
          tabBarColor: 'red',
          tabBarIcon: ({ color }) => (
            <Entypo name="home" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name='Chat'
        component={Chat}
        options={{
          tabBarLabel: 'Chat',
          tabBarIcon: ({ color }) => (
            <Ionicons name="chatbubbles-sharp" color={color} size={25} />

          ),
        }}
      />
      <Tab.Screen
        name='Profile'
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user" color={color} size={25} />

          ),
        }}
      />

    </Tab.Navigator>
  )
}

export const AppRoutes = () => {
  return (
    
      <Stack.Navigator
        initialRouteName='TabBar'
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name="TabBar" component={TabBar} />
        <Stack.Screen name="DetailRoom" component={DetailRoom} />
        <Stack.Screen name="ChatScreen" component={ChatScreen} />


      </Stack.Navigator>
    
  );
}

