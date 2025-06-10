# Pizzaria Demo - Front-end

Este é um projeto de front-end desenvolvido em React para consumir a API da Pizzaria Demo. Ele permite gerenciar o cardápio de uma pizzaria, incluindo funcionalidades de listagem, visualização, criação, edição e remoção de itens.

## Tecnologias Utilizadas

- **React:** Biblioteca para construção da interface de usuário.
- **Vite:** Ferramenta de build para desenvolvimento rápido.
- **Material-UI (MUI):** Biblioteca de componentes para estilização.
- **Axios:** Cliente HTTP para realizar as chamadas à API.
- **React Router:** Para gerenciamento de rotas na aplicação.

## Funcionalidades

- [x] Listagem de todos os itens do cardápio.
- [x] Adição de novos itens ao cardápio.
- [x] Edição de informações de itens existentes.
- [x] Remoção de itens do cardápio.
- [x] Interface responsiva e amigável.
- [x] Feedback de carregamento e mensagens de erro.

## Instalação e Execução

Siga os passos abaixo para rodar o projeto localmente:

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/seu-usuario/pizzaria-demo.git
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

## Preview da Interface

*(Aqui você pode adicionar um print da tela da aplicação depois de executá-la)*

![image](https://github.com/user-attachments/assets/b8392a83-500b-4b13-a4f6-829d2f664539)


## Melhorias Futuras

- [ ] Implementar autenticação JWT para proteger as rotas.
- [ ] Adicionar um editor de ingredientes mais robusto.
- [ ] Criar testes unitários para os componentes e serviços.
- [ ] Paginação para a lista de itens do cardápio.
- [ ] Adicionar funcionalidade de busca e filtro.
