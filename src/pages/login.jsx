import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputLabel from "../components/inputLabel.jsx";
import Button from "../components/button.jsx";
import api from "../services/api.js";
import { useUser } from "../contexts/UserContext.jsx";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useUser();
  const [formData, setFormData] = useState({
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
      const response = await api.post("/auth/login", formData);
      const data = response.data;

      if (data.success) {
        // Salva na memória do contexto, não no localStorage
        login(data.data);
        alert("Login realizado com sucesso!");
        navigate("/");
      } else {
        setError(data.message || "Email ou senha inválidos.");
      }
    } catch (err) {
      const msg = err.response?.data?.message || "Erro de conexão. Tente novamente mais tarde.";
      setError(msg);
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
                <img src="../assets/logo.svg" alt="Logo"></img>
                <h1 className="text-3xl font-bold">Rede de Alívio</h1>
            </div>
            <h2 className="text-xl font-bold">Seja bem-vindo(a)!</h2>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            
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
                type="password"
                value={formData.senha}
                onChange={(e) => handleChange(e, "senha")}
              />
            </div>

            {error && <p className="text-red-600 font-bold text-sm text-center">{error}</p>}

            <div className="flex flex-col gap-3 items-center">
              <Button label="Entrar" type="submit" />
              
              <p className="text-sm text-dark-green">
                Novo aqui? <a href="/register" className="font-bold text-cyan-600 hover:underline">Cadastre-se</a>
              </p>
            </div>
          </form>

        </div>
      </div>
    </div>
  );
}