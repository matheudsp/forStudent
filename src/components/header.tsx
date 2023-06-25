import React, { useContext } from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'
import { MaterialIcons, Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParamsList } from '../routes/app.routes';

type HeaderProps = {
    name?: string
    buttons?: boolean
}



export default function Header({ name, buttons }: HeaderProps) {
    const navigation = useNavigation()

    const goBack = () => {
        navigation.goBack()
    }
    
    return (
        <View className='flex h-[10%] justify-center w-full'>
            <View className=' h-full w-full flex-row items-center justify-around'>
                {buttons && (
                <TouchableOpacity className='bg-[#6a6ce8] p-3 rounded-full' onPress={goBack}>
                    <MaterialIcons name="keyboard-arrow-left" size={24} color="white" />
                </TouchableOpacity>
                )}
                <Text className='text-xl font-bold text-[#6e7282]'>{name}</Text>
                {buttons && (
                    <TouchableOpacity className='bg-[#6a6ce8] p-3 rounded-full'>
                        <Feather name="more-horizontal" size={24} color="white" />
                    </TouchableOpacity>
                )}
            </View>
        </View>
    )
}
