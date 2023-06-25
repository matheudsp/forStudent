import React from 'react';
import { View, ScrollView, Image, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { StackParamsList } from '../routes/app.routes';


interface CardContainer {
    title: string,
    handleSeeAll?: VoidFunction
    itemsList: ItemList[]
}

type ItemList = {
    name: string,
    geo:string,
    image:string
}



export const CardContainer = ({ title, itemsList }: CardContainer) => {
    return (
        <>
        <View className='py-2'>
            <View className='flex-row px-8 py-4 mt-2 justify-between '>
                <Text className='font-bold text-xl'>{title}</Text>
                <TouchableOpacity className=''>
                    <Text className='font-normal text-base text-[#6a6ce8]'>
                        Ver todos
                    </Text>
                </TouchableOpacity>
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {itemsList.map((item, i) => {
                    return <Cards key={i} image={item.image} title={item.name} geo={item.geo}  />

                })}

            </ScrollView>
            </View>
        </>
    )
}

type CardProps = {
    title: string,
    geo:string,
    image:string
}

const Cards = ({title,geo,image}:CardProps) => {
    const navigation = useNavigation<NativeStackNavigationProp<StackParamsList>>()

    const goToDetail = () => {
        navigation.navigate('DetailRoom')
    }

    return (
        <TouchableOpacity className='w-64 h-64 flex items-center px-4' onPress={goToDetail}>
            <Image
                className='w-full h-4/5 bg-gray-200 border rounded-[40px] '
                source={{ uri: image }}
            />
            <View className='self-start px-2.5'>
                <Text className='font-bold text-lg'>{title}</Text>
                <View className='flex-row items-center'>
                    <Ionicons name="location-sharp" size={16} color="#c3c4d0" />
                    <Text className='text-base font-light ml-1 text-[#6e7282]'>{geo}</Text>
                </View>
            </View>
        </TouchableOpacity>

    );
};

