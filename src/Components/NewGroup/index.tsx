import { Button } from "../Button";
import { Header } from "../Header";
import { Hightlight } from "../Highlight";
import { Container, Content, Icon } from "./styles";

export function NewGroup() {
    return (
        <Container>
            <Header showBackButton />
            <Content>
                <Icon />
                <Hightlight 
                    title="Nova turma"
                    subtitle="Crie uma nova turma para compartilhar com seus amigos"
                />
                <Button
                    title="Criar turma"
                />
            </Content>
        </Container>
    )
}