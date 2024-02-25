import { BackButton, BackIncon, Container, Logo } from "./style";
import logoImg from "@assets/logo.png";

type Props = {
    showBackButton?: boolean;
}

export function Header({ showBackButton = false }: Props) {
    return (
        <Container>
            {
                showBackButton &&
                <BackButton>
                    <BackIncon />
                </BackButton>
            }
            <Logo source={logoImg} />
        </Container>
    )
}

