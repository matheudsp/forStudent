import React, { useState } from "react"
import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import { EvilIcons, Ionicons, Entypo } from "@expo/vector-icons"




type SearchProps = {
    searchIcon?: boolean
}



export const SearchInput = ({ searchIcon }: SearchProps) => {
    const [search, setSearch] = useState('')

    const handleSearch = () => {
        console.log(search)
    }
    return (
        <View className='mt-4 w-11/12 mx-auto'>

            <View className="flex-row w-full h-16 items-center justify-between rounded-full bg-white shadow-2xl ">
                <TextInput className="ml-7 w-4/6 text-lg font-light h-full"

                    value={search}
                    placeholder="Pesquise um imóvel..."
                    onChangeText={setSearch}
                />
                {searchIcon && (
                    <TouchableOpacity onPress={handleSearch} className="h-5/6 w-14 items-center rounded-full block justify-center bg-[#6a6ce8] mr-2">
                        <EvilIcons className="" name="search" color="white" size={30} />
                    </TouchableOpacity>)}
            </View>
        </View>
    )
}

type ChatProps = {
    style?:string
}
export const ChatInput = ({style}: ChatProps) => {
    return (
            <View className={`w-11/12 mx-auto flex-row py-2 ${style}`}>
            <TouchableOpacity className="w-1/6 items-center rounded-full block justify-center bg-[#6a6ce8] mr-2">
                <Entypo className="" name="plus"  color="white" size={30} />
            </TouchableOpacity>
            <View className="flex-row w-5/6 h-16 items-center justify-between rounded-full bg-white shadow-2xl ">
                <TextInput className="ml-7 w-4/6 text-lg font-light h-full"


                    placeholder="Mensagem"

                />

                <TouchableOpacity className="h-5/6 w-14 items-center rounded-full block justify-center bg-[#6a6ce8] mr-2">
                    <Ionicons name="send" size={24} color="white" />
                </TouchableOpacity>
            </View>
        </View>
    )
}
