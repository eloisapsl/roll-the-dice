# 🎲 Roll The Dice

## Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Funcionalidades](#funcionalidades)
- [Tecnologias](#tecnologias)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Pré-requisitos](#pré-requisitos)
- [Instalação e Execução](#instalação-e-execução)
- [Endpoint da API](#endpoint-da-api)
- [Escolhas Técnicas](#escolhas-técnicas)
- [Desafios Enfrentados](#desafios-enfrentados)
- [Materiais de Estudo e Apoio Utilizados](#materiais-de-estudos-e-apoio-utilizados)

---
## Sobre o Projeto

Aplicação web para simulação de rolagem de dados, desenvolvida como desafio técnico Directy. O projeto é composto por um back-end em Node.js com Express e um front-end em React com Vite.

---

## Funcionalidades

- Seleção entre 7 modelos de dados reais: D2, D4, D6, D8, D10, D12 e D20
- Rolagem via botão com resultado calculado pelo back-end
- Exibição do resultado na tela após retorno da API
- Histórico de rolagens com tipo do dado, resultado e horário
- Opção de limpar o histórico

---

## Tecnologias

**Back-end**
- Node.js + TypeScript
- Express 5
- express-validator (validação do tipo de dado)
- Morgan (logs de requisição)
- CORS
- dotenv

**Front-end**
- React 19 + TypeScript
- Vite
- Axios
- Bootstrap + React Bootstrap

---

## Estrutura do Projeto

```
roll-the-dice/
├── back-end/
│   └── src/
│       ├── server.ts           # inicializa o servidor
│       ├── app.ts              # configura o Express e middlewares
│       ├── routes/
│       │   ├── index.ts        # agrega as rotas
│       │   └── diceRoutes.ts   # define a rota POST /roll com validação
│       ├── controllers/
│       │   └── diceController.ts  # processa a requisição e retorna resposta
│       └── services/
│           └── diceService.ts  # lógica de geração do número aleatório
└── front-end/
    └── src/
        ├── App.tsx             # componente principal e gerenciamento de estado
        ├── components/
        │   └── dice/
        │       └── dice.tsx    # componente de exibição do dado selecionado
        └── services/
            └── api.ts          # comunicação com o back-end via Axios
```

---

## Pré-requisitos

- [Node.js](https://nodejs.org/) v18 ou superior
- npm

---

## Instalação e Execução

### 1. Clone o repositório

```bash
git clone https://github.com/eloisapsl/roll-the-dice.git
cd roll-the-dice
```

### 2. Back-end

```bash
cd back-end
npm install
```

Crie um arquivo `.env` na raiz da pasta `back-end`:

```env
PORT=3000
```

> Caso o `.env` não seja criado, a aplicação sobe na porta `3000` por padrão.

Inicie o servidor em modo de desenvolvimento:

```bash
npm run dev
```

O back-end estará disponível em `http://localhost:3000`.

### 3. Front-end

Abra um novo terminal na raiz do projeto:

```bash
cd front-end
npm install
npm run dev
```

O front-end estará disponível em `http://localhost:5173`.

> Certifique-se de que o back-end está rodando antes de usar a interface.

---

## Endpoint da API

### `POST /api/v1/roll`

Recebe o tipo de dado e retorna o resultado da rolagem.

**Corpo da requisição:**
```json
{
  "diceType": "D6"
}
```

**Tipos aceitos:** `D2`, `D4`, `D6`, `D8`, `D10`, `D12`, `D20`

**Resposta de sucesso (`200`):**
```json
{
  "chosenDiceType": "D6",
  "result": 4
}
```

**Resposta de erro — tipo inválido (`400`):**
```json
{
  "message": "Dado inválido. Escolha outro dado."
}
```

---

## Escolhas Técnicas

- **Divisão de responsabilidades no back-end:** Optei por dividir a aplicação no back-end em camadas (`controller`, `routes` e `services`) porque, além de me fornecer mais organização durante o desenvolvimento, consigo saber exatamente o que cada porção do código faz. Busquei ser o mais cautelosa possível para evitar o "over-engineering" pois entendo que complicar demais aplicações simples é custoso para manutenção. 

- **Divisão de responsabilidades no front-end:** Escolhi centralizar, na pasta `/src/services`, a comunicação com a API, para evitar tornar o código da aplicação principal muito extenso e confuso com essas informações, além disso, se a URL da API muda, eu sei exatamente onde alterar essa informação. 

- **Criação do componente `Dice.tsx:` e gerenciamento de estado no `App.tsx`:** O gerenciamento de estado (dado selecionado, resultado, histórico e carregamento) foi mantido na raiz da aplicação. O componente Dice é apenas visual, recebe as props e renderiza, sem uma lógica por trás. Acredito que essa divisão facilitou a montagem da aplicação principal.
---

## Desafios Enfrentados

- **A pergunta: "Será que meu códgo está complexo demais pro problema proposto?" -**
Enquanto programava o back-end, tentei aplicar algumas técnicas de organização de responsabilidades que aprendi nos projetos que fiz, mas em alguns momentos pensei se era a abordagem mais adequada para o contexto do desafio. Apesar disso, segui firme na decisão pois entendo que aplicações, mesmo que simples, podem escalar em algum momento. Por exemplo: E se nossa aplicação virar um Cassino Online? E se agora precisarmos criar mais uma lógica que calcule uma rolagem de 2 ou mais dados e salve isso em um local?
Partindo disso, busquei manter a coerencia entre as camadas e a simplicidade no código, além claro, de ser autêntica nas minhas decisões e na construção do meu projeto.  
---

## Materiais de Estudos e Apoio Utilizados

- [Como consumir APIs no ReactJS](https://www.youtube.com/watch?v=UZ_Pbt89-Kw)
- [Aulão de ReactJS pra Iniciantes, com Vite e TypeScript](https://www.youtube.com/watch?v=oqXNj8umBXI)
- [Game-icons.net](https://game-icons.net)
- [Using TypeScript](https://react.dev/learn/typescript#typescript-with-react-components)
- [Tudo sobre Flexbox: Entendendo o Layout Flexível em CSS](https://www.dio.me/articles/tudo-sobre-flexbox-entendendo-o-layout-flexivel-em-css)
- [HTTP GET vs POST: Entenda a diferença e quando usar cada método](https://www.alura.com.br/artigos/diferencas-entre-get-e-post?srsltid=AfmBOoo3pPjPT2Gni8FKZ2bx6klsqx8dlTkTYOKScZoZXcCZXzcKkgDR)
- ChatGPT, ClaudeAI e Google Gemini para apoio na organização estrutural do projeto, dúvidas e sugestões de melhoria. 
---
