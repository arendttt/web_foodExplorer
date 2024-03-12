import { Container, Main, Tags, Counter } from "./styles";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Input } from "../../components/Input";
import { Tag } from "../../components/Tag";

import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { FiPlus, FiMinus, FiSearch } from "react-icons/fi";
import { PiReceiptLight } from "react-icons/pi";

import cardImage from "../../assets/cardImage.png"

import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";
import { USER_ROLE } from "../../../utils/roles";

export function Details() {
    const { user } = useAuth();

    const [data, setData] = useState(null);

    const params = useParams();
    const navigate = useNavigate();

    const imageURL = data && `${api.defaults.baseURL}/files/${data.image}`;

    function handleBack() {
        navigate("/");
    };

    function navigateEditPlate() {
        navigate(`/edit/${params.id}`)
    }

    useEffect(() => {
        async function fetchPlate() {
            const response = await api.get(`/plates/${params.id}`);
            setData(response.data);
        }

        fetchPlate();

    }, [])

    return (
        <Container>
            <Header>
                <div className="search">
                    <Input 
                        icon={FiSearch}
                        placeholder="Busque por pratos ou ingredientes"
                        className="search"
                    />
                </div>
            </Header>

           { data &&
                <Main>
                    <span onClick={handleBack}><MdOutlineKeyboardArrowLeft/> voltar</span>
                    
                    <section>
                        <img src={imageURL} alt="" />

                        <div className="content">
                            <h2>{ data.title }</h2>
                            <p className="description">{ data.description }</p>

                            {data.ingredients &&
                                
                                <Tags>
                                    
                                    { data.ingredients.map(ingredient => (
                                        <Tag 
                                            key={String(ingredient.id)}
                                            title={ingredient.name}
                                        />
                                        ))
                                    }
                                   
                                </Tags>
                                
                              
                            }

                           <div className="btnSection">
                            { user.role === USER_ROLE.CUSTOMER ?
                                <>
                                    <Counter >
                                        <FiMinus />
                                        <p>01</p>
                                        <FiPlus />
                                    </Counter>


                                    <button>
                                        <PiReceiptLight />
                                        pedir ∙ R$ { data.price }
                                    </button>
                                </>
                            :  
                                    <button onClick={navigateEditPlate}>
                                        Editar prato
                                    </button>
                            }

                            </div>      
                           
                        </div>

                    </section>

                </Main>
            }

            <Footer />
        </Container>
    );
};