import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Header from "../components/header.jsx";
import MiniStoryBox from "../components/miniStoryBox.jsx";
import api from "../services/api.js";
import { useUser } from "../contexts/UserContext.jsx";

export default function MyStories() {
    const { user } = useUser();
    const navigate = useNavigate();
    const [myRelatos, setMyRelatos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!user || !user.id) {
            alert("Você precisa estar logado para ver seus relatos.");
            navigate("/login");
            return;
        }

        async function fetchMyStories() {
            try {
                const response = await api.get(`/relatos/autor/${user.id}`);
                if (response.data.success) {
                    setMyRelatos(response.data.data);
                }
            } catch (error) {
                console.error("Erro ao buscar meus relatos", error);
            } finally {
                setLoading(false);
            }
        }
        fetchMyStories();
    }, [user, navigate]);

    const handleRelatoClick = (id) => {
        navigate(`/storyDetails`, { state: { id } });
    };

    return(
        <>
            <Header />
            <h1 className="p-5 font-bold text-xl md:text-3xl">Seus relatos</h1>
            
            {loading ? (
                <p className="p-5 text-center">Carregando...</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 p-5 gap-5 place-items-center">
                    {myRelatos.length > 0 ? (
                        myRelatos.map((relato) => (
                            <div key={relato.id} onClick={() => handleRelatoClick(relato.id)} className="cursor-pointer w-full flex justify-center">
                                <MiniStoryBox 
                                    title={relato.titulo} 
                                    likeCount={relato.likes || 0} 
                                    commentCount={relato.comentarios ? relato.comentarios.length : 0}
                                />
                            </div>
                        ))
                    ) : (
                        <div className="col-span-full text-center text-gray-600 mt-10">
                            <p>Você ainda não possui relatos.</p>
                            <Link to="/writeStory" className="text-blue-accent font-bold hover:underline">
                                Escreva seu primeiro relato!
                            </Link>
                        </div>
                    )}
                </div>
            )}
        </>
    );
}