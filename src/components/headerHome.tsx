import React, { useContext } from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'
import { Ionicons, SimpleLineIcons } from '@expo/vector-icons';




type HeaderProps = {
    name?: string
}

const user = {
    name: 'Matheus Pereira',
    geo: 'Floriano, PI'
}

export default function HeaderHome({ name }: HeaderProps) {



    return (
        <View className='flex w-11/12 h-20 justify-center mx-auto'>
            <View className='px-2'>
                <View>
                    <Text className='text-base font-normal text-[#b1b5c1]'>Localização</Text>
                </View>
                <TouchableOpacity className='flex-row justify-between'>
                    <View className='flex-row items-center'>
                        <Ionicons name="location-sharp" size={22} color="#6e7282"/>
                        <Text className='text-xl font-bold ml-2 text-[#6e7282]'>{user.geo}</Text>
                    </View>
                    <View>
                        <SimpleLineIcons name="arrow-down" size={24} color="#6e7282" />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}
