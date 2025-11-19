import Header from "../components/header.jsx";
import MiniStoryBox from "../components/miniStoryBox.jsx";

export default function MyStories() {
    return(
        <>
            <Header />
            <h1 className="p-5 font-bold text-xl md:text-3xl">Seus relatos</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:p-5 gap-5 place-items-center">
                <MiniStoryBox title="Título do Relato" likeCount="100" commentCount="100"/>
                <MiniStoryBox title="Título do Relato" likeCount="100" commentCount="100"/>
                <MiniStoryBox title="Título do Relato" likeCount="100" commentCount="100"/>
                <MiniStoryBox title="Título do Relato" likeCount="100" commentCount="100"/>
                <MiniStoryBox title="Título do Relato" likeCount="100" commentCount="100"/>
            </div>
        </>
    );
}
