import Header from "../components/header.jsx";
import MiniStoryBox from "../components/miniStoryBox.jsx";

export default function Home() {
    return (
        <>
            <Header />
            <h1 className="p-5 font-bold text-3xl">Relatos de Outras Pessoas</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 p-5 gap-5 place-items-center">
                <MiniStoryBox title="Título do Relato" likeCount="100" commentCount="100"/>
                <MiniStoryBox title="Título do Relato" likeCount="100" commentCount="100"/>
                <MiniStoryBox title="Título do Relato" likeCount="100" commentCount="100"/>
                <MiniStoryBox title="Título do Relato" likeCount="100" commentCount="100"/>
                <MiniStoryBox title="Título do Relato" likeCount="100" commentCount="100"/>
                <MiniStoryBox title="Título do Relato" likeCount="100" commentCount="100"/>
            </div>
        </>
    )
}