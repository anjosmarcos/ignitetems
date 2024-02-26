import { Header } from "src/Components/Header";
import { Container, Form, HeaderList, NumberOfPlayers } from "./styles";
import { Hightlight } from "src/Components/Highlight";
import { ButtonIcon } from "src/Components/ButtonIcon";
import { Input } from "src/Components/Input";
import { Filter } from "src/Components/Filter";
import { FlatList } from "react-native";
import { useState } from "react";

export function Players() {
    const [team, setTeam] = useState('Time A')
    const [players, setPlayers] = useState(['a', 'b'])

    return (
        <Container>
            <Header showBackButton />

            <Hightlight
                title="Nome da Turma"
                subtitle="Adicione jogadores para criar turmas e partidas"
            />

            <Form>
                <Input
                    placeholder="Nome da turma"
                    autoCorrect={false}
                />

                <ButtonIcon />

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
        </Container>
    )
}