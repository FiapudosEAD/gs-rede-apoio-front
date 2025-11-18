import Header from "../components/header.jsx";
import Button from "../components/button.jsx";
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'; 

export default function NotFound() {
    return (
        <>
            <Header />
            <div className="flex flex-col items-center justify-center min-h-[80vh] p-4 text-center">
                <ExclamationTriangleIcon className="w-30 text-blue-accent" aria-hidden="true" />
                <h1 className="text-8xl font-bold text-dark-green mb-4">404</h1>
                <h2 className="text-3xl font-semibold text-blue-accent mb-6">
                    Página Não Encontrada
                </h2>
                <p className="text-lg text-gray-600 mb-8 max-w-lg">
                    Desculpe, a página que você está procurando não existe.
                </p>
                
                <Button label={"Voltar para Home"} redirectUrl={"/"} />
            </div>
        </>
    );
}