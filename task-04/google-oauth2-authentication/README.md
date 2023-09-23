# Exemplo de autenticação Google com Node.js

Este é um exemplo simples de como implementar autenticação Google em uma aplicação Node.js Express usando a biblioteca `passport`.

## Requisitos:

- Node.js
- Framework Express
- Biblioteca Passport
- Um ID e segredo de cliente OAuth 2.0 do Google

## Configuração:

1. Clone este repositório.
2. Instale as dependências necessárias:

```
npm install
```

3. Crie um arquivo `.env` e adicione as seguintes variáveis de ambiente:

```
secret=SUA_CHAVE_SECRETA
clientID=SEU_ID_CLIENTE_GOOGLE
clientSecret=SEU_SEGREDO_CLIENTE_GOOGLE
```

4. Substitua os valores nas variáveis de ambiente `clientID` e `clientSecret` pelos seus próprios ID e segredo de cliente OAuth 2.0 do Google.

## Uso:

Para iniciar o servidor, execute o seguinte comando:

```
node server.js
```

Você pode então acessar os seguintes endpoints:

- `/home`: Este endpoint retorna uma mensagem simples.
- `/google`: Este endpoint redireciona os usuários para a tela de consentimento da autenticação Google.
- `/google/callback`: Este endpoint é chamado após o usuário ter se autenticado com o Google. Se a autenticação for bem-sucedida, o usuário será redirecionado para o endpoint `/success`. Caso contrário, o usuário será redirecionado para o endpoint `/failed`.
- `/failed`: Este endpoint é exibido se a autenticação do usuário falhar.
- `/success`: Este endpoint é exibido se a autenticação do usuário for bem-sucedida.
- `/logout`: Este endpoint desloga o usuário autenticado e o redireciona para o endpoint `/home`.

## Exemplo:

Para fazer login usando o Google, visite o endpoint `/google` no seu navegador da web. Você será redirecionado para a tela de consentimento da autenticação Google. Após ter se autenticado com o Google, você será redirecionado para o endpoint `/success`.

Para fazer logout, visite o endpoint `/logout` no seu navegador da web. Você será deslogado e redirecionado para o endpoint `/home`.

## Conclusão:

Este é um exemplo simples de como implementar autenticação Google em uma aplicação Node.js Express. Você pode usar este como ponto de partida para construir seu próprio sistema de autenticação.
