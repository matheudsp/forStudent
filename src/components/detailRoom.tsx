import React from 'react';
import { View, ScrollView, Image, Text, TouchableOpacity, Button} from 'react-native';
import { Ionicons } from '@expo/vector-icons';


type RoomProps = {
    name: string;
    geo: string;
    description?: string
    price?:string
}

interface DetailContainer extends RoomProps {
    image:string
}

export const DetailRoomContainer = ({ name, geo, image, description,price }: DetailContainer) => {
    return (

        <View className=' w-full h-[90%]  bg-gray-300'>
            <ScrollView className='w-full px-10'>
                <Image
                    className='w-full my-6 h-64 mx-auto self-center bg-gray-200 border rounded-[40px] '
                    source={{ uri: image }}

                />

                <RoomInfo name={name} geo={geo} description={description} price={price}/>
            </ScrollView>
            <TouchableOpacity className='bg-[#6a6ce8] items-center justify-center p-4 m-4 rounded-3xl'>
                <Text className='text-white font-bold text-xl'>
                    Reservar
                </Text>
            </TouchableOpacity>
           
        </View>

    )
}

const RoomInfo = ({ name, geo, description,price}: RoomProps) => {
    return (
        <>
            <View className='flex-row items-center mx-auto'>
                <View className='w-5/6 h-14 items-start '>
                    <Text className='font-bold text-xl'>{name}</Text>
                    <View className='flex-row items-center'>
                        <Ionicons name="location-sharp" size={16} color="#787d91" />
                        <Text className='text-base font-normal ml-1 text-[#6e7282]'>{geo}</Text>
                    </View>
                </View>
                <TouchableOpacity className='bg-[#7678e85e] w-1/6 h-14 rounded-3xl justify-center items-center'>
                    <Ionicons className='' name="chatbubble-ellipses" size={24} color={'#6a6ce8'} />
                </TouchableOpacity>

            </View>
            <View className='py-6'>
                <Text className='font-semibold text-xl'>Descrição</Text>
                <Text className='pt-2 text-[#6e7282] text-base font-normal leading-[18px]'>{description}</Text>
            </View>

            <View className='py-6'>
                <Text className='font-semibold text-xl'>Preço</Text>
                <Text className='pt-2 text-[#6a6ce8] text-base font-light'>R$ <Text className='font-semibold'>{price}</Text></Text>
            </View>
            
        </>
    )
}