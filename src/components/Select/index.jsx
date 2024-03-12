import { Container } from "./styles";

export function Select({...rest}) {
    return (
        <Container {...rest}>
            <select>
                <option value="meal">Refeição</option>
                <option value="appetizers">Aperitivos</option>
                <option value="deserts">Sobremesa</option>  
            </select>
        </Container>
    );
};