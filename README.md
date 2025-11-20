# 🌐 Rede de Alívio - Frontend

![Status](https://img.shields.io/badge/Status-Em_Desenvolvimento-green)
![Version](https://img.shields.io/badge/Version-1.0.0-blue)
![License](https://img.shields.io/badge/License-MIT-yellow)

Bem-vindo ao repositório do frontend da **Rede de Alívio**, um projeto desenvolvido pela organização **[FiapudosEAD](https://github.com/FiapudosEAD)**. Esta aplicação é uma plataforma de apoio social onde usuários podem compartilhar relatos e interagir através de comentários e curtidas.

## 🚀 Tecnologias Utilizadas

* **[React](https://react.dev/)**: Biblioteca para construção de interfaces.
* **[Vite](https://vitejs.dev/)**: Ferramenta de build rápida e leve.
* **[Tailwind CSS](https://tailwindcss.com/)**: Framework de estilização utility-first.
* **[Axios](https://axios-http.com/)**: Cliente HTTP para comunicação com a API.
* **[React Router DOM](https://reactrouter.com/)**: Gerenciamento de rotas (SPA).
* **Context API**: Gerenciamento de estado global (Sessão de Usuário).

## ✨ Funcionalidades

* 🔐 **Autenticação**: Cadastro e Login de usuários com segurança (JWT).
* 📝 **Publicação**: Criação de novos relatos de vida/apoio.
* 👀 **Visualização**: Feed de relatos de outros usuários.
* ❤️ **Interação**: Sistema de curtidas (Likes) em relatos e comentários.
* 💬 **Comentários**: Adição de comentários em relatos existentes.
* 👤 **Meus Relatos**: Área exclusiva para gerenciar suas publicações.
* 🛡️ **Rotas Protegidas**: Controle de acesso para usuários não logados.

## 📦 Pré-requisitos

Antes de começar, você precisará ter instalado em sua máquina:
* [Node.js](https://nodejs.org/) (versão 18 ou superior)
* [NPM](https://www.npmjs.com/) ou Yarn

## 🛠️ Instalação e Execução

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/FiapudosEAD/gs-rede-apoio-front.git](https://github.com/FiapudosEAD/gs-rede-apoio-front.git)
    cd gs-rede-apoio-front
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Configure as Variáveis de Ambiente:**
    Crie um arquivo `.env` na raiz do projeto (ou configure no seu serviço de hospedagem) com a URL da API:
    ```env
    VITE_API_URL=[https://gs-rede-de-alivio-back.onrender.com/api](https://gs-rede-de-alivio-back.onrender.com/api)
    ```

4.  **Execute o projeto:**
    ```bash
    npm run dev
    ```
    O acesso estará disponível em `http://localhost:5173`.

## 📂 Estrutura de Pastas
src/
├── assets/         # Imagens e ícones (logo.svg)
├── components/     # Componentes reutilizáveis (Header, Button, StoryBox)
├── contexts/       # Context API (UserContext)
├── pages/          # Páginas da aplicação (Login, Home, WriteStory)
├── services/       # Configuração do Axios (api.js)
└── main.jsx        # Ponto de entrada

## 🤝 Contribuição

Este projeto é mantido pela **FiapudosEAD**. Sinta-se à vontade para abrir Issues ou enviar Pull Requests.

---
<p align="center">Desenvolvido por <a href="https://github.com/FiapudosEAD">FiapudosEAD</a></p>