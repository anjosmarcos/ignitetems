import { useState } from "react";
import { Alert, FlatList } from "react-native";
import { NavigationContainer, useRoute } from "@react-navigation/native";


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

type RouteParams = {
    group: string
}

export function Players() {
    const [newPlayerName, setNewPlayerName] = useState('')
    const [team, setTeam] = useState('Time A');
    const [players, setPlayers] = useState<PlayerStorageDTO[]>([]);
    const route = useRoute()
    const { group } = route.params as RouteParams

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
        try{
            const playersByTeam = await playerGetByGroupAndTeam(group, team)
            setPlayers(playersByTeam)
        }catch(error) {
            console.log(error)
            Alert.alert('Não foi possível carregar os jogadores filtradas por time')
        }
    }

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
                    onChangeText={setNewPlayerName}
                    placeholder="Nome da turma"
                    autoCorrect={false}
                />

                <ButtonIcon
                    icon="add"
                    onPress={handleAddPlayers}
                />

            </Form>

            <HeaderList>
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
                <NumberOfPlayers>
                    {players.length}
                </NumberOfPlayers>

            </HeaderList>

            <FlatList
                data={players}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                    <PlayerCard
                        name={item}
                        onRemove={() => { }}
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
            />

        </Container>
    );
}