# Pizzaria Demo - Front-end

Este é um projeto de front-end desenvolvido em React para consumir a API da Pizzaria Demo. Ele permite gerenciar o cardápio de uma pizzaria, incluindo funcionalidades de listagem, visualização, criação, edição e remoção de itens.

## ✨ Tecnologias Utilizadas

- **React:** Biblioteca para construção da interface de usuário.
- **Vite:** Ferramenta de build para desenvolvimento rápido.
- **Material-UI (MUI):** Biblioteca de componentes para estilização.
- **Axios:** Cliente HTTP para realizar as chamadas à API.
- **React Router:** Para gerenciamento de rotas na aplicação.

## 🚀 Funcionalidades

- [x] Listagem de itens do cardápio em formato de card.
- [x] Adição e edição de itens em um modal interativo.
- [x] Remoção de itens com modal de confirmação.
- [x] Visualização de ingredientes da pizza em um modal separado.
- [x] Interface responsiva e amigável.
- [x] Feedback de carregamento e mensagens de sucesso/erro (Snackbar).

## 📦 Instalação e Execução

Siga os passos abaixo para rodar o projeto localmente:

1.  **Clone o repositório para sua máquina:**
    ```bash
    git clone <URL_DO_REPOSITORIO_NO_GITHUB>
    cd pizzaria-demo
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Execute o servidor de desenvolvimento:**
    O front-end tentará se conectar à API na porta `8080`. Certifique-se de que o back-end esteja rodando.
    ```bash
    npm run dev
    ```

A aplicação estará disponível em `http://localhost:3000`.

## 🔮 Melhorias Futuras

- [ ] Implementar autenticação JWT para proteger as rotas.
- [ ] Adicionar um editor de ingredientes mais robusto.
- [ ] Criar testes unitários para os componentes e serviços.
- [ ] Paginação para a lista de itens do cardápio.
- [ ] Adicionar funcionalidade de busca e filtro.
