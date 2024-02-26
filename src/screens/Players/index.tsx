import { Header } from "src/Components/Header";
import { Container } from "./styles";
import { Hightlight } from "src/Components/Highlight";

export function Players() {
    return(
        <Container>
            <Header showBackButton />

            <Hightlight 
                title="Nome da Turma"
                subtitle="Adicione jogadores para criar turmas e partidas"
            />
        </Container>
    )
}