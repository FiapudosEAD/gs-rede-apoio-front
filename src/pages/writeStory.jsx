import Header from "../components/header.jsx";
import InputLabel from "../components/inputLabel.jsx";
import TextAreaLabel from "../components/textAreaLabel.jsx";
import Button from "../components/button.jsx";

export default function WriteStory() {
  return (
    <>
        <Header />
        <h1 className="p-5 w-11/12 h-11/12 font-bold text-2xl lg:text-3xl">Escreva seu relato</h1>
        <div className="bg-light-blue m-5 lg:m-10 rounded-md shadow-md flex flex-col p-5 lg:p-10 gap-4">   
            <InputLabel placeholder="Título:"/>
            <div className="bg-dark-green rounded-md h-1"></div>
            <TextAreaLabel placeholder="Escreva seu relato aqui:" content=""/>
            <Button label="Publicar" redirectUrl={"/myStories"}/>
        </div>
    </>
  );
}