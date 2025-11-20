import { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import InputLabel from "../components/inputLabel.jsx";
import Button from "../components/button.jsx";
import api from "../services/api.js";
import { useUser } from "../contexts/UserContext.jsx";
import logo from "../assets/logo.svg";

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useUser();
  
  const from = location.state?.from || "/";

  const [formData, setFormData] = useState({
    email: "",
    senha: ""
  });
  const [error, setError] = useState("");

  const handleChange = (e, key) => {
    setFormData({ ...formData, [key]: e.target.value });
    if (error) setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await api.post("/auth/login", formData);
      const data = response.data;

      if (data.success) {
        login(data.data);
        navigate(from, { replace: true }); 
      }
    } catch (err) {
      const serverMessage = err.response?.data?.message;
      setError(serverMessage || "Erro de conexão ou credenciais inválidas.");
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
                <img src={logo} alt="Logo" className="w-12 h-12" />
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

            {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded relative text-center text-sm font-bold">
                    {error}
                </div>
            )}

            <div className="flex flex-col gap-3 items-center">
              <Button label="Entrar" type="submit" />
              
              <p className="text-sm text-dark-green">
                Novo aqui? <Link to="/register" className="font-bold text-cyan-600 hover:underline">Cadastre-se</Link>
              </p>
            </div>
          </form>

        </div>
      </div>
    </div>
  );
}