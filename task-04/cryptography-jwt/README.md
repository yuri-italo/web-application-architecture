# Exemplo de autenticação JWT com Express e Cookie Parser

Este é um exemplo simples de como implementar autenticação JWT com Express e Cookie Parser em uma aplicação Node.js.

**Requisitos:**

* Node.js
* Express framework
* Biblioteca JSON Web Token (JWT)
* Middleware de parser de cookies

## Configuração:

1. Clone este repositório.
2. Instale as dependências necessárias:

```
npm install
```

3. Crie um par de arquivos `private.key` e `public.key` usando os seguintes comandos:

```
openssl genrsa -out private.key 2048
openssl rsa -pubout -in private.key -out public.key
```

## Uso:

Para iniciar o servidor, execute o seguinte comando:

```
node index.js
```

Você pode então acessar os seguintes endpoints:

* `/`: Este endpoint retorna uma mensagem simples.
* `/clientes`: Este endpoint retorna uma lista de clientes, mas apenas para usuários autenticados.
* `/login`: Este endpoint permite que os usuários façam login e gerem um token JWT.
* `/logout`: Este endpoint permite que os usuários façam logout e invalidem seu token JWT.

## Autenticação:

Para acessar o endpoint `/clientes`, você deve primeiro gerar um token JWT fazendo login. Para fazer isso, envie uma requisição POST para o endpoint `/login` com seu nome de usuário e senha no corpo da requisição. Se o login for bem-sucedido, o servidor responderá com um objeto JSON contendo o token.

Uma vez que você tenha um token, você pode enviá-lo com todas as requisições subsequentes para o endpoint `/clientes`. O servidor verificará o token e permitirá o acesso ao recurso se o token for válido.

## Notas adicionais:

* O middleware de parser de cookies é usado para analisar cookies de requisições recebidas. Isso é necessário porque o token JWT é armazenado em um cookie.
* Os arquivos `privateKey` e `publicKey` são usados para assinar e verificar tokens JWT, respectivamente. Esses arquivos devem ser mantidos em segredo.
* A variável de ambiente `SECRET` é usada para assinar e verificar tokens JWT. É importante usar uma chave secreta forte.
* A função `verifyJWT` é usada para verificar tokens JWT em requisições recebidas. Essa função é usada para proteger o endpoint `/clientes`.

## Link para a Coleção do Postman
[simple-jwt-cryptography-auth](https://drive.google.com/file/d/1wpgHjo4R9IaEeVY3HzZRtDWJP_fOW8O4/view?usp=sharing)