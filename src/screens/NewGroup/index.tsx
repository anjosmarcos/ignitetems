import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

import { Button } from "../../Components/Button";
import { Header } from "../../Components/Header";
import { Hightlight } from "../../Components/Highlight";
import { Input } from "../../Components/Input";

import { Container, Content, Icon } from "./styles";

export function NewGroup() {
    const [group, setGroup] = useState('')
    const navegation = useNavigation()

    function handleNew() {
        navegation.navigate('players', {group: group})
    }

    return (
        <Container>
            <Header showBackButton />
            <Content>
                <Icon />
                <Hightlight 
                    title="Nova turma"
                    subtitle="Crie uma nova turma para compartilhar com seus amigos"
                />
                <Input
                    placeholder="Nome da turma"
                    onChangeText={setGroup}
                />
                <Button
                    title="Criar turma"
                    style={{ marginTop: 20 }}
                    onPress={handleNew}
                />
            </Content>
        </Container>
    )
}