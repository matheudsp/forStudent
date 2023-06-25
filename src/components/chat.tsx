import React from 'react';
import { View, ScrollView, Image, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ChatInput } from './input';



export const MessageContainer = () => {
    return (

        <View className='py-2 w-full h-full bg-gray-300'>

            <UserInfo />
            <ScrollView className='px-5' contentContainerStyle={{ flexGrow: 1, justifyContent: 'flex-end'}}>
                <View className='bg-[#6a6ce8] self-end items-center justify-end py-2 my-3 px-6 rounded-3xl'>
                    <Text className='text-white text-sm'>You</Text>
                </View>
                <View className='bg-slate-100 self-start items-center justify-end py-2 my-3 px-6 rounded-3xl'>
                    <Text className='text-black text-sm'>Other</Text>
                </View>
                
            </ScrollView>
            <ChatInput style='mb-20'/>
        </View>

    )
}

const UserInfo = () => {
    return (
        <View className='flex-row w-full px-8 py-2 mt-2 justify-between '>
            <TouchableOpacity className='bg-gray-50 rounded-full w-full p-2 flex-row justify-between items-center '>
                <Image
                    className='w-16 h-16 border rounded-full'
                    source={{ uri: 'https://img.freepik.com/free-photo/portrait-happy-young-woman-looking-camera_23-2147892777.jpg?w=2000' }}
                />
                <View>
                    <Text className='font-bold text-xl text-black'>
                        Marcelo
                    </Text>
                    <Text className='font-light text-base text-black'>
                        Proprietário da casa
                    </Text>
                </View>
                <View className=' bg-[#6a6ce8] py-2 px-3 rounded-3xl'>
                    <Text className='text-white'>Online</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}