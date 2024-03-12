import { Container, Counter } from "./styles";

import { PiHeart } from "react-icons/pi";
import { MdOutlineModeEdit } from "react-icons/md";
import { RiArrowRightSLine } from "react-icons/ri";
import { FiPlus, FiMinus } from "react-icons/fi";

import imgPlaceholder from "../../assets/blueDefaultImg.png"

import { Button } from "../Button"

import { Link } from "react-router-dom";

import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";
import { USER_ROLE } from "../../../utils/roles";
 

export function Card({ data, ...rest }) {
    const { user } = useAuth();
    const imageUrl = data.image ? `${api.defaults.baseURL}/files/${data.image}` : imgPlaceholder;

    return (
        <Container {...rest}>
            { user.role === USER_ROLE.CUSTOMER ?
                       
                <PiHeart className="PiHeart"/>
            :
                <MdOutlineModeEdit className="MdEdit"/>

            }


            <img src={imageUrl} alt={`Imagem do prato`} />

            <h1>
                {data.title} <RiArrowRightSLine />
            </h1>

            <p>{ data.description }</p>

            <span> R$ { data.price },00 </span>

            { user.role === USER_ROLE.CUSTOMER &&
            <div>
                <Counter >
                    <FiMinus />
                    <p>01</p>
                    <FiPlus />
                </Counter>

                <Button title="incluir"/>
            </div>}

        </Container>
    );
};