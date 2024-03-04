import { FlatList } from 'react-native';
import { useState, useEffect, useCallback } from 'react';
import { useNavigation, useFocusEffect } from '@react-navigation/native'

import { Header } from 'src/Components/Header';
import { Hightlight } from 'src/Components/Highlight';
import { GroupCard } from 'src/Components/GrupoCard';
import { ListEmpty } from 'src/Components/ListEmpty';
import { Button } from 'src/Components/Button';

import { Container } from './styles';
import { groupsGetAll } from '@storage/group/groupGetAll';

export function Groups() {
  const [groups, setGroups] = useState<string[]>([])

  const navigation = useNavigation()

  function handleNewGroup() {
    navigation.navigate('new')
  }

  async function fetchGroups() {
    try {
      const data = await groupsGetAll();
      setGroups(data)
    } catch (error) {
      console.log(error);
    }
  }

  function handleOpenGroup(group: string) {
    navigation.navigate('players', { group })
  }

  useFocusEffect(useCallback(() => {
    fetchGroups()
  },[]))

  return (
    <Container>
      <Header />
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
            onPress={() => {
              console.log('foi')
              handleOpenGroup(item)
            }} 
            
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


