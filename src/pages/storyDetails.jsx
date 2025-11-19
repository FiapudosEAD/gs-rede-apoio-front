import Header from "../components/header";
import StoryBox from "../components/storyBox";
import InputLabel from "../components/inputLabel";
import CommentBox from "../components/commentBox";
import Button from "../components/button";

export default function StoryDetails() {
    return (
        <>
            <Header />
            <div className="my-10 xl:mx-40">
                <StoryBox title="Título do Relato" content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Cum praesentium iste quibusdam maxime et, voluptatum minima laboriosam ex, harum itaque deleniti aspernatur necessitatibus soluta, libero incidunt numquam? Animi, iusto itaque!        
                Consequatur architecto fugit sapiente voluptates dicta esse nemo similique, repellat consequuntur libero! Sit sint maxime harum, numquam ex culpa ad obcaecati adipisci quis animi, sed maiores deleniti rerum pariatur nulla."
                likeCount="100"/>
                <div className="bg-blue-accent p-5 mx-5 rounded-md flex flex-col gap-5 mb-10">
                    <InputLabel placeholder="Adicionar comentário:"/>
                    <div className="self-end">
                        <Button label="Comentar" redirectUrl=""/>
                    </div>
                </div>
                <h1 className="font-bold m-5 text-2xl text-dark-green">100 Comentários</h1>
                <div className="m-5 gap-5">
                    <CommentBox userName="Usuário1" content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                        Cum praesentium iste quibusdam maxime et, voluptatum minima laboriosam ex, harum itaque deleniti aspernatur necessitatibus soluta, libero incidunt numquam? Animi, iusto itaque!        
                        Consequatur architecto fugit sapiente voluptates dicta esse nemo similique, repellat consequuntur libero! Sit sint maxime harum, numquam ex culpa ad obcaecati adipisci quis animi, sed maiores deleniti rerum pariatur nulla." 
                        likeCount="10"/>
                    <CommentBox userName="Usuário2" content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                        Cum praesentium iste quibusdam maxime et, voluptatum minima laboriosam ex, harum itaque deleniti aspernatur necessitatibus soluta, libero incidunt numquam? Animi, iusto itaque!        
                        Consequatur architecto fugit sapiente voluptates dicta esse nemo similique, repellat consequuntur libero! Sit sint maxime harum, numquam ex culpa ad obcaecati adipisci quis animi, sed maiores deleniti rerum pariatur nulla." 
                        likeCount="20"/>
                    <CommentBox userName="Usuário3" content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                        Cum praesentium iste quibusdam maxime et, voluptatum minima laboriosam ex, harum itaque deleniti aspernatur necessitatibus soluta, libero incidunt numquam? Animi, iusto itaque!        
                        Consequatur architecto fugit sapiente voluptates dicta esse nemo similique, repellat consequuntur libero! Sit sint maxime harum, numquam ex culpa ad obcaecati adipisci quis animi, sed maiores deleniti rerum pariatur nulla." 
                        likeCount="30"/>
                </div>
            </div>
        </>
        
    );
}