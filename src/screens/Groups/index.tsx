import { FlatList } from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native'

import { Header } from 'src/Components/Header';
import { Hightlight } from 'src/Components/Highlight';
import { GroupCard } from 'src/Components/GrupoCard';
import { ListEmpty } from 'src/Components/ListEmpty';
import { Button } from 'src/Components/Button';

import { Container } from './styles';

export function Groups() {
  const [groups, setGroups] = useState<string[]>([])

  const navigation = useNavigation()

  function handleNewGroup() {
    navigation.navigate('new')
  }

  return (
    <Container>
      <Header showBackButton/>
      <Hightlight
        title="Turma"
        subtitle="Escolha uma turma para participar"
      />

      <FlatList 
        data={groups}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <GroupCard 
            title={item} 
          />
        )}
        contentContainerStyle={groups.length === 0 && {flex:1}}
        ListEmptyComponent={() => (
          <ListEmpty 
          message="Nenhuma turma cadastrada"
          />  
        )}
      />

      <Button 
        title='Criar turma'
        onPress={handleNewGroup}
      />

    </Container>
  );
}


