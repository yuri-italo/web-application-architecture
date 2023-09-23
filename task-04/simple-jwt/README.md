# Node.js Express JWT Authentication Simple Example

## Descrição

Este é um exemplo simples de implementação de autenticação JWT em uma aplicação Node.js Express.

## Requisitos

* Node.js
* Express framework
* Biblioteca JSON Web Token (JWT)

## Configuração

1. Clone este repositório.
2. Instale as dependências necessárias:

```
npm install
```

3. Crie um arquivo `.env` e adicione a seguinte variável de ambiente:

```
SECRET=YOUR_SECRET_KEY
```

## Uso

Para iniciar o servidor, execute o seguinte comando:

```
node index.js
```

Você pode então acessar os seguintes endpoints:

* `/`: Este endpoint retorna uma mensagem simples.
* `/clientes`: Este endpoint retorna uma lista de clientes, mas apenas para usuários autenticados.
* `/login`: Este endpoint permite que os usuários façam login e gerem um token JWT.
* `/logout`: Este endpoint permite que os usuários façam logout e invalidem seu token JWT.

## Autenticação

Para acessar o endpoint `/clientes`, você deve primeiro gerar um token JWT fazendo login. Para fazer isso, envie uma requisição POST para o endpoint `/login` com seu nome de usuário e senha no corpo da requisição. Se o login for bem-sucedido, o servidor responderá com um objeto JSON contendo o token.

Depois de ter um token, você pode enviá-lo com todas as requisições subsequentes para o endpoint `/clientes`. O servidor verificará o token e permitirá o acesso ao recurso se o token for válido.

## Link para a Coleção do Postman
[simple-jwt-auth](https://drive.google.com/file/d/1wpgHjo4R9IaEeVY3HzZRtDWJP_fOW8O4/view?usp=sharing)