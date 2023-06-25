import React from 'react';
import { SafeAreaView } from 'react-native';
import Header from '../../components/header';
import { MessageContainer } from '../../components/chat';




export default function ChatScreen() {
  return (

    <SafeAreaView className="flex-1 bg-gray-100 pt-7">
        <Header name={'Bate-papo'} buttons/>
        <MessageContainer />
         
    </SafeAreaView>

  )
}