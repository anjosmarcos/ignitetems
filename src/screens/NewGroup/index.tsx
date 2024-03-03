import { useNavigation } from "@react-navigation/native";

import { Button } from "../../Components/Button";
import { Header } from "../../Components/Header";
import { Hightlight } from "../../Components/Highlight";
import { Input } from "../../Components/Input";

import { Container, Content, Icon } from "./styles";

export function NewGroup() {
    const navegation = useNavigation()

    function handleNew() {
        navegation.navigate('players', {group: 'gropo players Rocket'})
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