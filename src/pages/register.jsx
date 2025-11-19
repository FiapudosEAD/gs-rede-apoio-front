import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputLabel from "../components/inputLabel.jsx";
import Button from "../components/button.jsx";
import api from "../services/api";

export default function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    senha: ""
  });
  const [error, setError] = useState("");

  const handleChange = (e, key) => {
    setFormData({ ...formData, [key]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await api.post("/auth/register", formData);
      const data = response.data;

      if (response.ok && data.success) {
        alert("Cadastro realizado com sucesso!");
        navigate("/login");
      } else {
        setError(data.message || "Erro ao cadastrar.");
      }
    } catch (err) {
      console.error(err);
      setError("Erro de conexão com o servidor.");
    }
  };

  return (
    <div className="flex min-h-screen w-full">
      <div className="hidden md:block w-1/2 bg-gradient-to-r from-cyan-500 to-emerald-300">
      </div>
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8">
        <div className="w-full max-w-md text-dark-green">
          <div className="mb-5">
            <div className="flex items-center gap-2 font-bold text-2xl mb-5">
                <img src="../src/assets/logo.svg"></img>
                <h1 className="text-3xl font-bold">Rede de Alívio</h1>
            </div>
            <h2 className="text-xl font-bold">Registre-se</h2>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            
            <div>
              <InputLabel 
                placeholder="Nome:" 
                value={formData.nome}
                onChange={(e) => handleChange(e, "nome")}
              />
            </div>
            
            <div>
              <InputLabel 
                placeholder="E-mail:" 
                type="email"
                value={formData.email}
                onChange={(e) => handleChange(e, "email")}
              />
            </div>

            <div>
              <InputLabel 
                placeholder="Senha:" 
                value={formData.senha}
                onChange={(e) => handleChange(e, "senha")}
              />
            </div>

            <div>
              <InputLabel 
                placeholder="Confirmar Senha:" 
                value={formData.senha}
                onChange={(e) => handleChange(e, "senha")}
              />
            </div>

            {error && <p className="text-dark-green font-bold text-sm text-center">{error}</p>}

            <div className="flex flex-col gap-3 items-center">
                <Button label="Cadastrar" type="submit"/>
              
              <p className="text-sm text-dark-green">
                Já tem conta? <a href="/login" className="font-bold text-cyan-600 hover:underline">Faça Login</a>
              </p>
            </div>
          </form>

        </div>
      </div>
    </div>
  );
}