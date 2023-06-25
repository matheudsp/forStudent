import React from 'react';
import { SafeAreaView } from 'react-native';
import Header from '../../components/header';
import { DetailRoomContainer } from '../../components/detailRoom';


import { items } from '../Home';


export default function DetailRoom() {
  return (
      
    <SafeAreaView className="flex-1 w-full bg-gray-100 pt-7">
        <Header name={'Detalhes'} buttons/>
        <DetailRoomContainer name={items[0].name} geo={items[0].geo} image={items[0].image} description={items[0].description} price={items[0].price}/>
    </SafeAreaView>

  )
}