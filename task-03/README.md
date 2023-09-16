# API de filmes em node.js com MySQL e base64

Esta API fornece endpoints para criar, ler, atualizar e excluir filmes, utilizando base64 para salvar imagens.

**Pré-requisitos**

* Node.js
* MySQL

**Instalação**

```
git clone https://github.com/yuri-italo/web-application-architecture.git
cd task-03
npm install
```

**Criação do banco de dados**

```
mysql -u root -p
CREATE DATABASE movie_db;
```

**Configuração das variáveis de ambiente**

Crie um arquivo `.env` na raiz do projeto e adicione as seguintes linhas:

```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=admin
DB_NAME=movie_db
```

**Exemplo de variáveis de ambiente**

As variáveis de ambiente definidas acima são apenas um exemplo. Você pode personalizar as variáveis de ambiente de acordo com suas necessidades.

**Exemplo de configuração de variáveis de ambiente**

Se você estiver usando um banco de dados MySQL em um servidor remoto, você pode configurar as variáveis de ambiente da seguinte forma:

```
DB_HOST=192.168.1.100
DB_USER=my_username
DB_PASSWORD=my_password
DB_NAME=my_database
```

**Iniciando o servidor**

```
npm start
```

**Endpoints**

| Método | Endpoint | Descrição |
|---|---|---|
| POST | `/api/movies` | Cria um novo filme. |
| GET | `/api/movies` | Obtém todos os filmes. |
| GET | `/api/movies/:id` | Obtém um filme específico pelo seu ID. |
| PUT | `/api/movies/:id` | Atualiza um filme específico pelo seu ID. |
| DELETE | `/api/movies/:id` | Exclui um filme específico pelo seu ID. |

**Exemplo de uso**

Para criar um novo filme, faça uma requisição POST para o endpoint `/api/movies` com o seguinte corpo:

```json
{
  "titulo": "O Poderoso Chefão",
  "sinopse": "Um filme sobre a família Corleone, uma família mafiosa.",
  "duracao": 175,
  "imagem": "https://example.com/o-poderoso-chefão.jpg",
  "dataLancamento": "1972-03-24"
}
```

Para obter todos os filmes, faça uma requisição GET para o endpoint `/api/movies`.

Para obter um filme específico pelo seu ID, faça uma requisição GET para o endpoint `/api/movies/:id`, onde `:id` é o ID do filme.

Para atualizar um filme específico pelo seu ID, faça uma requisição PUT para o endpoint `/api/movies/:id` com o seguinte corpo:

```json
{
  "titulo": "O Poderoso Chefão II",
  "sinopse": "Um filme sobre a continuação da história da família Corleone.",
  "duracao": 202,
  "imagem": "https://example.com/o-poderoso-chefão-ii.jpg",
  "dataLancamento": "1974-12-20"
}
```

Para excluir um filme específico pelo seu ID, faça uma requisição DELETE para o endpoint `/api/movies/:id`.

### Link para a Coleção do Postman
[movie-base64-collection](https://drive.google.com/file/d/19w072I-i3dLIaqmM6pc6xMeSOy5IK82O/view)