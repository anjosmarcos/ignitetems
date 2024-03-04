import { useEffect, useRef, useState } from "react";
import { Alert, FlatList, Keyboard, TextInput } from "react-native";
import { NavigationContainer, useRoute, useNavigation } from "@react-navigation/native";


import { Header } from "src/Components/Header";
import { Hightlight } from "src/Components/Highlight";
import { ButtonIcon } from "src/Components/ButtonIcon";
import { Input } from "src/Components/Input";
import { Filter } from "src/Components/Filter";
import { PlayerCard } from "src/Components/PlayerCard";
import { ListEmpty } from "src/Components/ListEmpty";
import { Button } from "src/Components/Button";

import { playerCreate } from "@storage/players/playerAddByGroup";
import { playerGetByGroup } from "@storage/players/playersGetByGroup";
import { PlayerStorageDTO } from "@storage/players/PlayerStorageDTO";
import { playerGetByGroupAndTeam } from "@storage/players/playerGetByGroupAndTeam";

import { Container, Form, HeaderList, NumberOfPlayers } from "./styles";
import { playerRemoveByGroup } from "@storage/players/playerRemoveByGroup";
import { groupRemoveByName } from "@storage/group/groupRemoveByName";
import { Loading } from "src/Components/Loading";

type RouteParams = {
    group: string
}

export function Players() {
    const [isLoading, setIsLoading] = useState(true)
    const [newPlayerName, setNewPlayerName] = useState('')
    const [team, setTeam] = useState('Time A');
    const [players, setPlayers] = useState<PlayerStorageDTO[]>([]);
    const route = useRoute()
    const { group } = route.params as RouteParams

    const navigation = useNavigation()
    const newPlayerNameInputRef = useRef<TextInput>(null)

    async function handleAddPlayers() {
        if (newPlayerName.trim().length === 0) {
            return Alert.alert('Nova Pessoa', 'Informe o nome da pessoa para adicionar.')
        }

        const newPlayer = {
            name: newPlayerName,
            team,
        }

        try {
            await playerCreate(newPlayer, group)
            fetchPlayerByTeam()
            // const players = await playerGetByGroup(group)

        } catch (error) {
            if (error instanceof Error) {
                Alert.alert('Nova Pessoa', error.message)
            } else {
                Alert.alert('Não foi possível adicionar uma nova pessoa')
                console.log(error)

            }
        }
    }

    async function fetchPlayerByTeam() {
        try {
            setIsLoading(true)
            const playersByTeam = await playerGetByGroupAndTeam(group, team)

            newPlayerNameInputRef.current?.blur()
            Keyboard.dismiss()

            setNewPlayerName('')
            setPlayers(playersByTeam)
            
        } catch (error) {
            console.log(error)
            Alert.alert('Não foi possível carregar os jogadores filtradas por time')
        } finally {
            setIsLoading(false)
        }
    }

    async function handleRemovePlayer(playerName: string) {
        try {
            await playerRemoveByGroup(playerName, group)
            fetchPlayerByTeam()

        } catch (error) {
            console.log(error)
            Alert.alert('Remover pessoa', 'Não foi possível remover essa pessoa')
        }
    }

    async function groupRemove() {
        try {
            await groupRemoveByName(group)
            navigation.navigate('groups')


        } catch (error) {
            console.log(error)
            Alert.alert('Remover Grupo', 'Não foi possível remover esse grupo')
        }
    }

    async function handleRemoveGroup() {
        Alert.alert(
            'Remover',
            'Deseja remover o grupo?',
            [
                {
                    text: 'Não',
                    style: 'cancel'
                },
                {
                    text: 'Sim',
                    onPress: () => { groupRemove() }
                }
            ]
        )
    }

    useEffect(() => {
        fetchPlayerByTeam()
    }, [team]);

    return (
        <Container>
            {/* Your code here */}

            <Header showBackButton />

            <Hightlight
                title={group}
                subtitle="Adicione jogadores para criar turmas e partidas"
            />

            <Form>
                <Input
                    inputRef={newPlayerNameInputRef}
                    onChangeText={setNewPlayerName}
                    value={newPlayerName}
                    placeholder="Nome da turma"
                    autoCorrect={false}
                    onSubmitEditing={handleAddPlayers}
                    returnKeyType="done"
                />

                <ButtonIcon
                    icon="add"
                    onPress={handleAddPlayers}
                />

            </Form>

            <HeaderList>
                {
                    isLoading ? <Loading /> :

                        <FlatList
                            data={['Time A', 'Time B']}
                            keyExtractor={(item) => item}
                            renderItem={({ item }) => (
                                <Filter
                                    title={item}
                                    isActive={item === team}
                                    onPress={() => setTeam(item)}
                                />
                            )}
                            horizontal

                        />
                }
                <NumberOfPlayers>
                    {players.length}
                </NumberOfPlayers>

            </HeaderList>

            <FlatList
                data={players}
                keyExtractor={(item) => item.name}
                renderItem={({ item }) => (
                    <PlayerCard
                        name={item.name}
                        onRemove={() => { handleRemovePlayer(item.name) }}
                    />
                )}
                ListEmptyComponent={() => (
                    <ListEmpty
                        message="Nenhum jogador adicionado"
                    />
                )}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={[
                    {
                        paddingBottom: 100
                    },
                    players.length === 0 && {
                        flex: 1
                    }
                ]}
            />

            <Button

                title="Remover Turma"
                type="SECONDARY"
                onPress={handleRemoveGroup}
            />

        </Container>
    );
}