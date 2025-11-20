import Button from "./button.jsx";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

export default function Header() {
    return (
        <div className="bg-dark-green flex items-center justify-between p-5 md:text-xl text-sm text-white">
            <Link to="/" className="flex items-center hover:opacity-80 transition-opacity">
                <img src={logo} alt="Rede de Alívio logo" className="w-10 md:w-15 xl:w-20" />
                <h1 className="font-bold md:text-xl xl:text-3xl ml-2">Rede de Alívio</h1>
            </Link>
            
            <div className="flex items-center gap-2 md:gap-6 xl:gap-10">
                <Link to="/myStories" className="hover:underline text-white">Meus Relatos</Link>
                <Button label={"Escrever Relato"} redirectUrl={"/writeStory"}></Button>
            </div>
        </div>
    );
}