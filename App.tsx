import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import React from 'react';
import Routes from './src/routes'




export default function App() {

  return (
    
    <NavigationContainer>


      <StatusBar backgroundColor="#f7f7f7" barStyle="dark-content" translucent={true} />

      <Routes />
      

    </NavigationContainer>
    
  );
}
