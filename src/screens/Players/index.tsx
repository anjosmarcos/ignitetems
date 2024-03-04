import { useState } from "react";
import { FlatList } from "react-native";
import { NavigationContainer, useRoute } from "@react-navigation/native";


import { Header } from "src/Components/Header";
import { Hightlight } from "src/Components/Highlight";
import { ButtonIcon } from "src/Components/ButtonIcon";
import { Input } from "src/Components/Input";
import { Filter } from "src/Components/Filter";
import { PlayerCard } from "src/Components/PlayerCard";
import { ListEmpty } from "src/Components/ListEmpty";
import { Button } from "src/Components/Button";

import { Container, Form, HeaderList, NumberOfPlayers } from "./styles";

type RouteParams = {
    group: string
}

export function Players() {
    const [team, setTeam] = useState('Time A');
    const [players, setPlayers] = useState([]);
    const route = useRoute()
    const { group } = route.params as RouteParams


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
                    placeholder="Nome da turma"
                    autoCorrect={false}
                />

                <ButtonIcon
                    icon="add"
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