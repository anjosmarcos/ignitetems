import { Header } from "src/Components/Header";
import { Container, Form } from "./styles";
import { Hightlight } from "src/Components/Highlight";
import { ButtonIcon } from "src/Components/ButtonIcon";
import { Input } from "src/Components/Input";
import { Filter } from "src/Components/Filter";

export function Players() {
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

            <Filter
                title="Todos"
                isActive
            />



        </Container>
    )
}