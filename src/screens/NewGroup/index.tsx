import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

import { Button } from "../../Components/Button";
import { Header } from "../../Components/Header";
import { Hightlight } from "../../Components/Highlight";
import { Input } from "../../Components/Input";
import { AppError } from "src/utils/AppError";
import { groupCreate } from "@storage/group/groupCreate";

import { Container, Content, Icon } from "./styles";
import { Alert } from "react-native";

export function NewGroup() {
    const [group, setGroup] = useState('')
    const navigation = useNavigation()

    async function handleNew() {
        try {
            if(group.trim().length === 0 ) throw new AppError('O nome do grupo é obrigatório')

            await groupCreate(group);
            navigation.navigate('players', { group });
        } catch (error) {
            if(error instanceof AppError){
                Alert.alert('Novo Grupo', error.message)
            }else {
                Alert.alert('Não foi possível criar um novo Grupo')
                console.log(error)
            }
        }
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