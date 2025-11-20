import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/header";
import StoryBox from "../components/storyBox";
import InputLabel from "../components/inputLabel";
import CommentBox from "../components/commentBox";
import Button from "../components/button";
import api from "../services/api";
import { useUser } from "../contexts/UserContext.jsx";

export default function StoryDetails() {
    const location = useLocation();
    const navigate = useNavigate();
    const { user } = useUser();
    const { id } = location.state || {}; 
    
    const [relato, setRelato] = useState(null);
    const [novoComentario, setNovoComentario] = useState("");

    async function fetchDetails() {
        try {
            const response = await api.get(`/relatos/${id}`);
            if (response.data.success) {
                setRelato(response.data.data);
            }
        } catch (error) {
            console.error("Erro ao carregar relato", error);
        }
    }

    useEffect(() => {
        if(!id) {
            navigate("/");
            return;
        }
        fetchDetails();
    }, [id, navigate]);

    const handleLikeRelato = async () => {
        try {
            await api.put(`/relatos/${id}/curtir`);
            setRelato(prev => ({ ...prev, likes: (prev.likes || 0) + 1 }));
        } catch (error) {
            console.error("Erro ao curtir relato", error);
        }
    };

    const handleLikeComentario = async (comentarioId) => {
        try {
            await api.put(`/comentarios/${comentarioId}/curtir`);
            setRelato(prev => ({
                ...prev,
                comentarios: prev.comentarios.map(com => 
                    com.id === comentarioId ? { ...com, likes: (com.likes || 0) + 1 } : com
                )
            }));
        } catch (error) {
            console.error("Erro ao curtir comentário", error);
        }
    };

    const handleComentar = async () => {
        if (!user || !user.id) {
            alert("Faça login para comentar");
            navigate("/login", { state: { from: location.pathname } });
            return;
        }

        if (!novoComentario.trim()) return;

        try {
            await api.post("/comentarios", {
                idAutor: user.id,
                idRelato: id,
                comentario: novoComentario
            });
            setNovoComentario("");
            fetchDetails();
        } catch (error) {
            console.error(error);
            alert("Erro ao comentar");
        }
    };

    if (!relato) return <p className="text-center p-10 font-bold text-xl">Carregando...</p>;

    return (
        <>
            <Header />
            <div className="my-10 xl:mx-40">
                <StoryBox 
                    title={relato.titulo} 
                    content={relato.texto}
                    likeCount={relato.likes}
                    onLike={handleLikeRelato}
                />
                <div className="bg-blue-accent p-5 mx-5 rounded-md flex flex-col gap-5 mb-10">
                    <InputLabel 
                        placeholder="Adicionar comentário:"
                        value={novoComentario}
                        onChange={(e) => setNovoComentario(e.target.value)}
                    />
                    <div className="self-end">
                        <Button label="Comentar" onClick={handleComentar}/>
                    </div>
                </div>
                <h1 className="font-bold m-5 text-2xl text-dark-green">
                    {relato.comentarios ? relato.comentarios.length : 0} Comentários
                </h1>
                <div className="m-5 gap-5 flex flex-col">
                    {relato.comentarios && relato.comentarios.map((com) => (
                        <CommentBox 
                            key={com.id}
                            userName={com.nomeAutor} 
                            content={com.comentario} 
                            likeCount={com.likes}
                            onLike={() => handleLikeComentario(com.id)} // Conecta o like do comentário
                        />
                    ))}
                </div>
            </div>
        </>
    );
}