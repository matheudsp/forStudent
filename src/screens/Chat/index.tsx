import React from 'react';
import { SafeAreaView } from 'react-native';
import Header from '../../components/header';
import { ChatMenuContainer } from '../../components/chatMenu';



export default function Chat() {
  return (

    <SafeAreaView className="flex-1 bg-gray-100">
        <Header name={'Bate-papo'} />
        <ChatMenuContainer />
         
    </SafeAreaView>

  )
}