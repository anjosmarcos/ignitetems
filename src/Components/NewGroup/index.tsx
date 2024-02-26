import { Button } from "../Button";
import { Header } from "../Header";
import { Hightlight } from "../Highlight";
import { Input } from "../Input";
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
                <Input
                    placeholder="Nome da turma"
                />
                <Button
                    title="Criar turma"
                    style={{ marginTop: 20 }}
                />
            </Content>
        </Container>
    )
}