import { Container, Main, Carousel } from "./styles";

import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Footer } from "../../components/Footer";
import { Card } from "../../components/Card";
import { Input } from "../../components/Input";

import { FiSearch } from "react-icons/fi";

import homeImg from "../../assets/homeImg.png"

import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { api } from "../../services/api";

export function Home() {
   const [plates, setPlates] = useState([]);
   const [search, setSearch] = useState("");

   const navigate = useNavigate();

   function handleDetails(id) {
    navigate(`/details/${id}`)
   };
   
   useEffect(() => {

    async function fetchPlates() {      
      const response = await api.get(`/plates?title=${search}&ingredient=${search}`)
      setPlates(response.data)

    }

    fetchPlates()

  }, [search])
  

    return (
        <Container>

            <Header>
                <div className="search">
                    <Input 
                        icon={FiSearch}
                        placeholder="Busque por pratos ou ingredientes"
                        onChange={(e) => setSearch(e.target.value)}
                        className="search"
                    />
                </div>
            </Header>

            <Main>
         
                <div className="brand">
                    <img src={homeImg} alt="" />

                    <h2>Sabores inigualáveis</h2>

                    <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>

                </div>

                <Carousel>
                   <Section title="Refeições">
                        {  plates.filter(plate => plate.category == "meal").length > 0 ? 
                            plates.filter(plates => plates.category == "meal")
                                .map(plate => (
                                    <Card 
                                        key={String(plate.id)}
                                        data={plate}
                                        onClick={() => handleDetails(plate.id)}
                                    />
                                ))
                            : 
                            <span className="empty">Não há pratos a serem exibidos.</span>
                           
                        }
                    </Section>   

                    <Section title="Aperitivos">
                        { plates.filter(plate => plate.category === "appetizers").length > 0 ? 
                            plates.filter(plates => plates.category == "appetizers").map(plate => (
                                <Card 
                                    key={String(plate.id)}
                                    data={plate}
                                    onClick={() => handleDetails(plate.id)}
                                />
                                ))
                            
                            : 
                            <span className="empty">Não há pratos a serem exibidos.</span>
                        }
                        
                    </Section> 

                    <Section title="Sobremesas">
                        {   plates.filter(plates => plates.category === "deserts").length > 0 ? 
                            plates.filter(plates => plates.category == "deserts").map(plate => (
                                <Card 
                                    key={String(plate.id)}
                                    data={plate}
                                    onClick={() => handleDetails(plate.id)}
                                />
                                ))
                            :

                            <span className="empty">Não há pratos a serem exibidos.</span>
                        }
                    </Section> 
            
                </Carousel>

            </Main>

            <Footer />

        </Container>
    );
};