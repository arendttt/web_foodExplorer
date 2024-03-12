import { Container, Fieldset, Form } from "./styles";

import { Brand } from "../../components/Brand";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { FiMail, FiLock, FiUser } from "react-icons/fi";

import { Link, useNavigate } from 'react-router-dom';

import { useState } from 'react';
import { api } from "../../services/api";

export function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    function handleSignUp() {
        if(!name || !email || !password) {
            return alert("Preencha todos os campos para continuar!")
        }

        api.post("/users", { name, email, password })
            .then(() => {
                alert("Usuário cadastrado com sucesso!")
                navigate("/")
            })
            .catch(error => {
                if(error.response) {
                    alert(error.response.data.message)
                } else {
                    alert("Não foi possível cadastrar.")
                }
            });
    }

    return (
        <Container>
            <Brand />  

            <Form>
                <h1>Crie sua conta</h1>

                <Fieldset> 
                    <label>                
                        <p>Seu nome</p>
                        <Input 
                            type="text"
                            icon={FiUser}
                            placeholder="exemplo: Milena Arendt"   
                            onChange={e => setName(e.target.value)}
                        />
                    </label>

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

                    <Button title="Criar conta" onClick={handleSignUp} />

                    <Link to="/" >Já tenho uma conta</Link>
                </Fieldset> 
            </Form>
            
        </Container>
    )
}