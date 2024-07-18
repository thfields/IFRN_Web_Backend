# Atividade Avaliativa Backend

Atividade avaliativa da disciplina Desenvolvimento Web Back-end do professor Marcelo Varela de Souza.

## Instruções de Configuração e Execução:

1. Certifique-se de ter o Node.js instalado em sua máquina.
  Para verificar utilize o comando:
```
node -v
npm -v
```
Caso não tenha instalado acesse o site oficial: 
[NodeJS Download](https://nodejs.org/en/download/current)

2. Clone este repositório usando o comando:
```
git clone https://github.com/thfields/IFRN_Web_Backend.git
```
3. Instale as dependências usando o npm:
```
npm install
```
4. Crie um arquivo `.env` na raiz do projeto e adicione o seguinte código:
```
URL_DATABASE = "mongodb+srv://admin:admin@cluster0.fuzknk1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
PORT= 3000
```
5. Inicie o servidor usando o comando:
```
npm start
```

# Descrição dos Endpoints

### Endpoints

#### Método: GET
- Descrição: Retorna todos os usuários cadastrados.
- Como usar: Faça uma requisição GET para `/users`.

#### Método: POST
- Descrição: Cria um novo usuário.
- Parâmetros:
  - `nome`: Nome do usuário (obrigatório).
  - `email`: Email do usuário (obrigatório).
  - `senha`: Senha do usuário (obrigatório).
- Como usar: Faça uma requisição POST para `/users`, enviando os parâmetros no corpo da requisição.

### Endpoint: `/users/:userId`

#### Método: GET
- Descrição: Retorna um usuário específico com base no ID fornecido.
- Como usar: Faça uma requisição GET para `/users/:userId`, substituindo `:userId` pelo ID do usuário desejado.

#### Método: PUT
- Descrição: Atualiza um usuário existente com base no ID fornecido.
- Parâmetros:
  - `nome`: Novo nome do usuário.
  - `email`: Novo email do usuário.
  - `senha`: Nova senha do usuário.
- Como usar: Faça uma requisição PUT para `/users/:userId`, enviando os parâmetros a serem atualizados no corpo da requisição.

#### Método: DELETE
- Descrição: Deleta um usuário existente com base no ID fornecido.
- Como usar: Faça uma requisição DELETE para `/users/:userId`, substituindo `:userId` pelo ID do usuário a ser deletado.

Certifique-se de incluir os parâmetros necessários e observar as restrições definidas para cada operação.


## Testes do Insomnia
Você pode encontrar os testes do Insomnia no arquivo `Avaliacao_Backend.json`. Importe este arquivo para o seu cliente Insomnia para testar os endpoints facilmente.
