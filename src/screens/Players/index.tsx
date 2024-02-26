import { Header } from "src/Components/Header";
import { Container } from "./styles";
import { Hightlight } from "src/Components/Highlight";
import { ButtonIcon } from "src/Components/ButtonIcon";

export function Players() {
    return(
        <Container>
            <Header showBackButton />

            <Hightlight 
                title="Nome da Turma"
                subtitle="Adicione jogadores para criar turmas e partidas"
            />
            
            <ButtonIcon />

        </Container>
    )
}