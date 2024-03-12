import { Container, Brand } from "./styles";

import { FiMenu, FiSearch, FiLogOut } from "react-icons/fi";
import { BsHexagonFill } from "react-icons/bs";
import { PiReceipt } from "react-icons/pi";

import { Input } from "../Input";

import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react'
import { USER_ROLE } from "../../../utils/roles";

export function Header({ children }) {
    const { signOut, user } = useAuth();

    const navigate = useNavigate();

    function handleSignOut() {
        navigate('/')
        signOut()
    };

    function handleNavigateNew() {
        navigate('/new')
    }

    return (
        <Container>
            <div className="content">
                    <FiMenu className="FiMenu"/>

                    <Brand>
                        <h1> <BsHexagonFill /> food explorer</h1>

                        { user.role === USER_ROLE.ADMIN &&
                            <p>admin</p>
                        }
                    </Brand>

                    { children }

                    { user.role === USER_ROLE.CUSTOMER ?

                        <button>
                            <PiReceipt />
                            <p>Pedidos (0)</p>
                        </button>

                        :

                        <button onClick={handleNavigateNew}>
                            <p>Novo prato</p>
                        </button>
                    
                    }

                    <PiReceipt className="PiReceipt"/>

                    <p className="order">0</p>

                    <FiLogOut className="FiLogOut" onClick={handleSignOut} />
            </div>
        </Container>
    );
};