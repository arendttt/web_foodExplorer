import { Container } from "./styles";

import { PiCopyright } from "react-icons/pi";

import { Brand } from "../Brand";

export function Footer() {
    return (
        <Container>

            <Brand />

            <p>
                <PiCopyright />
                2024 - Todos os direitos reservados.
            </p>


        </Container>
    );
};