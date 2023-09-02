# API de Filmes em Node.js com MongoDB

Este é um projeto de API de Filmes criada com Node.js e MongoDB, que permite realizar operações CRUD (Create, Read, Update, Delete) em uma coleção de filmes.

## Tecnologias Utilizadas

- **Node.js**: Plataforma de desenvolvimento JavaScript.
- **Express.js**: Framework web para Node.js usado para criar a API.
- **MongoDB**: Banco de dados NoSQL para armazenar informações sobre filmes.
- **Mongoose**: Biblioteca do Node.js que fornece uma interface mais simples para interagir com o MongoDB.
- **Body-parser**: Middleware para analisar solicitações JSON enviadas para a API.

## Como Rodar o Projeto

Siga as etapas abaixo para configurar e executar o projeto em sua máquina:

### Instalação de Dependências

Certifique-se de ter o Node.js e o MongoDB instalados em sua máquina. Em seguida, navegue até a pasta do projeto e execute o seguinte comando para instalar as dependências:

```bash
npm install
```


### Configuração do Banco de Dados
Certifique-se de que o servidor MongoDB esteja em execução. Você pode inicializá-lo usando o comando "mongod".

### Configuração das Variáveis de Ambiente (Opcional)
Se desejar configurar variáveis de ambiente, crie um arquivo .env na raiz do projeto e defina variáveis como PORT para a porta do servidor e MONGODB_URI para a URL do seu banco de dados MongoDB.

### Execução do Projeto
Após a instalação das dependências e a configuração do banco de dados, você pode iniciar o servidor executando o seguinte comando:

```bash
npm start
```

O servidor estará disponível em http://localhost:3000 (ou na porta configurada, se você tiver definido variáveis de ambiente).

## Teste da API
Use o software Postman ou outro cliente REST para testar as rotas da API.

### Rotas da API
- POST /movies: Crie um novo filme.
- GET /movies: Obtenha a lista de todos os filmes.
- GET /movies/:id: Obtenha os detalhes de um filme específico.
- PUT /movies/:id: Atualize as informações de um filme.
- DELETE /movies/:id: Exclua um filme.

### Link para a Coleção do Postman
[movie-collection](https://drive.google.com/file/d/14aDrSleYyLQZbMdKeM91_u1O-D0U3yDj/view?usp=drive_link)