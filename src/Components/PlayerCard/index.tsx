import { ButtonIcon } from "../ButtonIcon"
import { Container, Icon, Name } from "./styke"

interface Props {
    name?: string;
    onRemove: () => void;
}

export const PlayerCard: React.FC<Props> = ({name, onRemove}) => {
    return (
        <Container>
            <Icon name="person" />

            <Name>
                {name}
            </Name>

            <ButtonIcon
                icon='close'
                type='SECONDARY'
                onPress={onRemove}
            />
        </Container>
    )
}