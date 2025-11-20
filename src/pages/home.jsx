import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/header.jsx";
import MiniStoryBox from "../components/miniStoryBox.jsx";
import api from "../services/api.js";

export default function Home() {
    const [relatos, setRelatos] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchRelatos();
    }, []);

    async function fetchRelatos() {
        try {
            const response = await api.get("/relatos");
            if (response.data.success) {
                setRelatos(response.data.data);
            }
        } catch (error) {
            console.error("Erro ao buscar relatos", error);
        }
    }

    const handleLike = async (id) => {
        try {
            await api.put(`/relatos/${id}/curtir`);
            setRelatos(prevRelatos => 
                prevRelatos.map(relato => 
                    relato.id === id ? { ...relato, likes: (relato.likes || 0) + 1 } : relato
                )
            );
        } catch (error) {
            console.error("Erro ao curtir:", error);
            alert("Erro ao curtir o relato. Tente novamente.");
        }
    };

    const handleRelatoClick = (id) => {
        navigate(`/storyDetails`, { state: { id } });
    };

    return (
        <>
            <Header />
            <h1 className="p-5 font-bold text-3xl">Relatos de Outras Pessoas</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 p-5 gap-5 place-items-center">
                {relatos.length > 0 ? (
                    relatos.map((relato) => (
                        <div key={relato.id} onClick={() => handleRelatoClick(relato.id)} className="w-full flex justify-center cursor-pointer">
                            <MiniStoryBox 
                                title={relato.titulo} 
                                likeCount={relato.likes || 0} 
                                commentCount={relato.comentarios ? relato.comentarios.length : 0}
                                onLike={() => handleLike(relato.id)}
                        </div>
                    ))
                ) : (
                    <p className="col-span-full text-center text-gray-500">Carregando relatos ou nenhum encontrado...</p>
                )}
            </div>
        </>
    )
}