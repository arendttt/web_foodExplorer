import { Container, Fieldset, Form } from "./styles";

import { Brand } from "../../components/Brand";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { FiMail, FiLock } from "react-icons/fi";

import { Link } from 'react-router-dom';
import { useState } from 'react'
import { useAuth } from '../../hooks/auth';

export function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { signIn } = useAuth();

    function handleSignIn() {
        signIn({ email, password })
    };

    return (
        <Container>
            <Brand />  

            <Form>
                <h1>Faça login</h1>

                <Fieldset> 
                    <label>                
                        <p>Email</p>
                        <Input 
                            type="text"
                            icon={FiMail}
                            placeholder="exemplo@exemplo.com" 
                            onChange={e => setEmail(e.target.value)}  
                        />
                    </label>

                    <label>                
                        <p>Senha</p>
                        <Input 
                            type="password"
                            icon={FiLock}
                            placeholder="no mínimo 6 caracteres"
                            onChange={e => setPassword(e.target.value)} 
                        />
                    </label>

                    <Button title="Entrar" onClick={handleSignIn} />

                    <Link to="/register" >Criar uma conta</Link>
                </Fieldset> 
            </Form>
            
        </Container>
    )
}