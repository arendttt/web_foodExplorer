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

import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

import { api } from "../../services/api";

export function EditPlate() {   
    const params = useParams();
    const navigate = useNavigate();

    const [ingredients, setIngredients] = useState([]);
    const [newIngredient, setNewIngredient] = useState("");

    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const [image, setImage] = useState(null);


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

    async function handleEditPlate(e) {
        e.preventDefault();

        const formData = new FormData();
        formData.append("image", image);
        formData.append("title", title);
        formData.append("description", description);
        formData.append("price", price);

        ingredients.map(ingredient => (
            formData.append("ingredients", ingredient)
        ));

        await api.put(`/plates/${params.id}`, formData)
            .then(() => {
                alert("Prato editado com sucesso!")
                navigate(-1)
            })
            .catch(error => {
                if(error.response) {
                    alert(error.response.data.message)
                }
            })
    };

    async function handleRemovePlate() {
        const confirmed = confirm("Tem certeza que deseja deletar este prato?");

        if(confirmed) {
            await api.delete(`/plates/${params.id}`)
            navigate("/")
        };
    };


    useEffect(() => {
        async function fetchPlates() {
            const response = await api.get(`/plates/${params.id}`);

            const { title, description, price, ingredients, image } = response.data;

            setTitle(title);
            setDescription(description);
            setPrice(price);
            setIngredients(ingredients.map(ingredient => ingredient.name));
            setImage(image);
        };

        fetchPlates();
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

            <Main>
            <Link 
                to={`/details/${params.id}`}
                className="back"
            >
                <MdOutlineKeyboardArrowLeft/> voltar
            </Link>

            <h2>Editar prato</h2>

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
                            className="input inputTitle"
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                        />
                    </label>

                    <label>                
                        <p>Categoria</p>
                        <Select 
                            className="select" 
                            value={category} 
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
                            className="input" 
                            value={price}
                            onChange={e => setPrice(e.target.value)}
                        />
                    </label>
                </section>

                <section className="thirdSection">  
                    <label>          
                        <p>Descrição</p>      
                        <Textarea 
                            defaultValue={description}
                            onChange={e => setDescription(e.target.value)}
                        />
                    </label>
                </section>

                <div className="buttons">

                    <Button 
                        title="Excluir prato" 
                        className="deleteBtn" 
                        onClick={handleRemovePlate}
                    />

                    <Button 
                        title="Salvar alterações" 
                        className="button" 
                        onClick={handleEditPlate}
                    />

                </div>

            </Form>

            </Main>

            <Footer />
        </Container>
    );
};