import Button from "./button.jsx";

export default function Header() {
    return (
        <div className="">
            <div className="">
                <img src="./src/assets/logo.svg" alt="Rede de Alívio logo" className="" />
                <h1 className="">Rede de Alívio</h1>
            </div>
            <div className="">
                <a href="/" className="">Meus Relatos</a>
                <Button label={"Escrever Relato"} redirectUrl={"/"}></Button>
            </div>
        </div>
    );
}