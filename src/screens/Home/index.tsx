import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';

import { CardContainer } from '../../components/card';
import HeaderHome from '../../components/headerHome';
import { SearchInput } from '../../components/input';

export const items = [
  {
      name: 'Casa do Marcelo',
      image: 'https://media.designcafe.com/wp-content/uploads/2023/01/31151510/contemporary-interior-design-ideas-for-your-home.jpg',
      geo: 'Floriano, PI',
      description:'Casa bem localizada e com bairro seguro! Quarto com suíte e cama king-size. Também possui frigobar com cervejas dentro. 😁',
      price:'234,73'
  },
  {
      name: 'Casa do João',
      image: 'https://blogdaarquitetura.com/wp-content/uploads/2016/03/casa-velha-blog-da-arquitetura2-560x374.jpg',
      geo: 'Barão de Grajaú, MA'
  },

];

export default function Home() {
  return (

    <SafeAreaView className="flex-1 bg-gray-100 pt-7 ">
      <ScrollView>
        <HeaderHome />
        <SearchInput searchIcon />
        <CardContainer title={'Próximos à você'} itemsList={items} />
        <CardContainer title={'Recomendados'} itemsList={items} />
      </ScrollView>
    </SafeAreaView>

  )
}