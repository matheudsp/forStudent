import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { View, ScrollView, Image, Text, TouchableOpacity } from 'react-native';
import { StackParamsList } from '../routes/app.routes';

export const ChatMenuContainer = () => {
    return (

        <View className=' w-full h-full '>
            <ScrollView className='mb-20' contentContainerStyle={{ flexGrow: 1, justifyContent: 'flex-start'}}>
            <User />
            
            
            </ScrollView>
        </View>

    )
}

const User = () => {
    const navigation = useNavigation<NativeStackNavigationProp<StackParamsList>>()

    const goToChatScreen = () => {
        navigation.navigate('ChatScreen')
    }
    return (
        <View className='flex-row w-full justify-between shadow-2xl drop-shadow-2xl'>
            <TouchableOpacity className='bg-gray-200 w-full p-3 flex-row justify-between items-center ' onPress={goToChatScreen}>
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