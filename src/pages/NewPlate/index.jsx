import { Container, Main, ImageUpload, Form } from "./styles";

import { IngredientItem } from "../../components/IngredientItem";
import { Header } from "../../components/Header";
import { Textarea } from "../../components/Textarea";
import { Button } from "../../components/Button";
import { Select } from "../../components/Select";
import { Footer } from "../../components/Footer";
import { Input } from "../../components/Input";

import { MdOutlineKeyboardArrowLeft, MdOutlineFileUpload } from "react-icons/md";
import { FiSearch } from "react-icons/fi";

import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { api } from "../../services/api";

export function NewPlate() {
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("meal");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const [ingredients, setIngredients] = useState([]);
    const [newIngredient, setNewIngredient] = useState("");

    const [image, setImage] = useState(null);
    

    const navigate = useNavigate();

    function handleAddIngredient() {
        if(!newIngredient) {
            return alert("Preencha o campo antes de adicionar.")
        };

        setIngredients((prevState) => [...prevState, newIngredient]);
        setNewIngredient("")
    };

    function handleRemoveIngredient(ingredientDeleted) {
        setIngredients((prevState) => prevState.filter(ingredient => ingredient !== ingredientDeleted));
    };

    function handleImage(e) {
        const file = e.target.files[0];
        setImage(file)
    };

    async function handleAddPlate(e) {
        e.preventDefault();

        const formData = new FormData();
        formData.append("image", image);
        formData.append("title", title);
        formData.append("description", description);
        formData.append("category", category);
        formData.append("price", price);

        ingredients.map(ingredient => (
            formData.append("ingredients", ingredient)
        ));

        await api.post("/plates", formData, { headers: {'Content-Type': 'multipart/form-data'}})
            .then(() => {
                alert("Prato cadastrado com sucesso!")
                navigate("/")
            })
            .catch(error => {
                if(error.response) {
                    alert(error.response.data.message)
                }
            })
    }

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

            <Main>
                <Link 
                    to="/"
                    className="back"
                >
                    <MdOutlineKeyboardArrowLeft/> voltar
                </Link>

                <h2>Adicionar prato</h2>

                <Form>

                    <section className="firstSection">
                        <ImageUpload>
                            <label htmlFor="image" className="label">Imagem do prato</label>
                            <label htmlFor="image" className="file-label">
                                <MdOutlineFileUpload className="upload-icon" />
                                Selecione a imagem
                            </label>
                            <Input
                                type="file"
                                id="image"
                                className="inputFile"
                                onChange={handleImage}
                            />
                        </ImageUpload>

                        <label>                
                            <p>Título</p>
                            <Input 
                                type="text"
                                placeholder="Ex: Salada Ceasar"   
                                className="input inputTitle"
                                onChange={e => setTitle(e.target.value)}
                            />
                        </label>

                        <label>                
                            <p>Categoria</p>
                            <Select 
                                className="select" 
                                onChange={e => setCategory(e.target.value)}
                            />
                        </label>
                    </section>

                    <section className="secondSection">  
                        <label>                
                            <p>Ingredientes</p>

                            <div className="itens">
                            { ingredients &&
                                ingredients.map((ingredient, index) => (
                                    <IngredientItem 
                                        key={String(index)}
                                        value={ingredient}
                                        onClick={() => handleRemoveIngredient(ingredient)}
                                    />
                                ))
                            }

                            <IngredientItem 
                                placeholder="Adicionar"
                                isNew
                                value={newIngredient}
                                onChange={e => setNewIngredient(e.target.value)}
                                onClick={handleAddIngredient}
                            />
                            </div>
                        </label>

                        <label>                
                            <p>Preço</p>
                            <Input 
                                type="number"
                                placeholder="R$ 00,00"  
                                className="input" 
                                onChange={e => setPrice(e.target.value)}
                            />
                        </label>
                    </section>

                    <section className="thirdSection">  
                        <label>          
                            <p>Descrição</p>      
                            <Textarea 
                                placeholder="Fale brevemente sobre o prato, seus ingredientes e composição."
                                onChange={e => setDescription(e.target.value)}
                            />
                        </label>
                    </section>

                    <Button 
                        title="Salvar alterações" 
                        className="button" 
                        onClick={handleAddPlate}
                    />

                </Form>

            </Main>

            <Footer />

        </Container>
    );
};