import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/header.jsx";
import InputLabel from "../components/inputLabel.jsx";
import TextAreaLabel from "../components/textAreaLabel.jsx";
import Button from "../components/button.jsx";
import api from "../services/api.js";
import { useUser } from "../contexts/UserContext.jsx";

export default function WriteStory() {
  const navigate = useNavigate();
  const { user } = useUser();
  const [titulo, setTitulo] = useState("");
  const [texto, setTexto] = useState("");

  const handleSubmit = async () => {
    if (!user || !user.id) {
        alert("Sessão expirada. Faça login novamente.");
        navigate("/login");
        return;
    }

    if (!titulo || !texto) {
        alert("Preencha título e conteúdo.");
        return;
    }

    try {
        await api.post("/relatos", {
            idAutor: user.id,
            titulo: titulo,
            texto: texto
        });
        alert("Relato salvo no banco com sucesso!");
        navigate("/myStories");
    } catch (error) {
        console.error("Erro ao publicar:", error);
        alert("Erro ao salvar relato.");
    }
  };

  return (
    <>
        <Header />
        <h1 className="p-5 font-bold text-3xl">Escreva seu relato</h1>
        <div className="bg-light-blue m-5 lg:m-10 rounded-md shadow-md flex flex-col p-5 lg:p-10 gap-4">   
            <InputLabel 
                placeholder="Título:"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
            />
            <div className="bg-dark-green rounded-md h-1"></div>
            <TextAreaLabel 
                placeholder="Escreva seu relato aqui:" 
                value={texto}
                onChange={(e) => setTexto(e.target.value)}
            />
            <Button label="Publicar" onClick={handleSubmit}/>
        </div>
    </>
  );
}