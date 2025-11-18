import Button from "./button.jsx";

export default function Header() {
    return (
        <div className="bg-dark-green flex items-center justify-between p-5 md:text-xl text-sm text-white">
            <div className="flex items-center">
                <img src="./src/assets/logo.svg" alt="Rede de Alívio logo" className="w-10 md:w-15 xl:w-20" />
                <h1 className="font-bold md:text-xl xl:text-3xl">Rede de Alívio</h1>
            </div>
            <div className="flex items-center gap-2 md:gap-6 xl:gap-10">
                <a href="/" className="">Meus Relatos</a>
                <Button label={"Escrever Relato"} redirectUrl={"/writeStory"}></Button>
            </div>
        </div>
    );
}