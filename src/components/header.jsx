import Button from "./button.jsx";

export default function Header() {
    return (
        <header className={``}>
            <div className={``}>
                <img src="../assets/logo.svg" alt="Rede de Alívio logo" className={``} />
                <h1 className={``}>Rede de Alívio</h1>
            </div>
            <div className={``}>
                <a href="/">Meus Relatos</a>
                <Button label={"Escrever Relato"} redirectUrl={"/"}></Button>
            </div>
        </header>
    );
}