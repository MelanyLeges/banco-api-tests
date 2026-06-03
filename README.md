# Banco API Tests

Projeto de automação de testes para a API REST do projeto Banco API, desenvolvido com JavaScript utilizando Mocha, Supertest e Chai.

## Objetivo

Este projeto tem como objetivo validar os comportamentos da API REST disponibilizada pelo projeto Banco API, contribuindo para a qualidade dos endpoints através de testes automatizados.

API testada:
- https://github.com/juliodelimas/banco-api

Repositório deste projeto:
- https://github.com/MelanyLeges/banco-api-tests

---

# Tecnologias Utilizadas

| Tecnologia | Finalidade |
|------------|------------|
| Node.js | Ambiente de execução JavaScript |
| Mocha | Framework de testes |
| Chai | Biblioteca de asserções |
| Supertest | Execução de requisições HTTP |
| Dotenv | Gerenciamento de variáveis de ambiente |
| Mochawesome | Geração de relatórios HTML |
| Mochawesome Report Generator | Geração visual dos relatórios |

---

# Pré-requisitos

Antes de executar o projeto, certifique-se de possuir instalado:

- Node.js (versão 18 ou superior recomendada)
- npm

Verificar versões:

```bash
node -v
npm -v
```

---

# Instalação

Clone o repositório:

```bash
git clone https://github.com/MelanyLeges/banco-api-tests.git
```

Acesse o diretório:

```bash
cd banco-api-tests
```

Instale as dependências:

```bash
npm install
```

---

# Configuração do Ambiente

O projeto utiliza variáveis de ambiente através da biblioteca dotenv.

Crie um arquivo chamado `.env` na raiz do projeto com o seguinte conteúdo:

```env
BASE_URL=http://localhost:3000
```

## Exemplo

Caso a API esteja rodando localmente:

```env
BASE_URL=http://localhost:3000
```

Caso esteja em outro ambiente:

```env
BASE_URL=https://meu-servidor.com
```

> O valor da variável deve apontar para a URL base da API Banco API que será testada.

---

# Estrutura do Projeto

Exemplo de organização do projeto:

```text
banco-api-tests
├── fixtures/
│   ├── postLogin.json
│   └── postTransferencias.json
│
├── test/
│   ├── login.test.js
│   └── transferencia.test.js
│
├── helpers/
│   └── autenticacao.js
│
├── mochawesome/
│   └── (relatórios gerados)
│
├── .env
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

> A estrutura pode variar conforme a evolução do projeto.

---

# Execução dos Testes

## Executar todos os testes

```bash
npm test
```

ou

```bash
npx mocha
```

---

## Executar um arquivo específico

```bash
npx mocha test/nome-do-arquivo.spec.js
```

---

## Executar testes com relatório Mochawesome

```bash
npx mocha --reporter mochawesome
```

Ao final da execução será criado o diretório:

```text
mochawesome/
```

contendo:

```text
mochawesome/
├── mochawesome.html
├── mochawesome.json
└── assets/
```

---

# Relatórios

Este projeto utiliza o reporter Mochawesome para geração de relatórios HTML.

Após a execução dos testes, abra o arquivo:

```text
mochawesome/mochawesome.html
```

em qualquer navegador para visualizar os resultados.

O relatório apresenta:

- Cenários executados
- Casos aprovados
- Casos reprovados
- Tempo de execução
- Stack traces de falhas
- Evidências de execução (quando configuradas)

---

# Scripts Disponíveis

Verifique os scripts definidos no arquivo `package.json`.

Exemplos comuns:

```json
{
  "scripts": {
    "test": "mocha",
    "test:report": "mocha --reporter mochawesome"
  }
}
```

Execução:

```bash
npm run test
```

```bash
npm run test:report
```

---

# Dependências Principais

## Mocha

Framework responsável pela execução dos testes.

Documentação:
https://mochajs.org/

---

## Chai

Biblioteca de asserções utilizada para validação dos resultados.

Documentação:
https://www.chaijs.com/

---

## Supertest

Biblioteca utilizada para realização das requisições HTTP durante os testes.

Documentação:
https://github.com/ladjs/supertest

---

## Dotenv

Responsável pelo carregamento das variáveis de ambiente.

Documentação:
https://github.com/motdotla/dotenv

---

## Mochawesome

Gerador de relatórios HTML para Mocha.

Documentação:
https://github.com/adamgruber/mochawesome

---

## Mochawesome Report Generator

Responsável pela geração visual dos relatórios Mochawesome.

Documentação:
https://github.com/adamgruber/mochawesome-report-generator

---

# Boas Práticas

- Não versionar o arquivo `.env`.
- Manter dados de teste isolados entre execuções.
- Utilizar variáveis de ambiente para diferentes ambientes (local, homologação e produção).
- Executar os testes antes de realizar merge de novas funcionalidades.
- Revisar periodicamente os cenários automatizados para acompanhar a evolução da API.

---

# Autor

**Melany Leges**

Projeto desenvolvido para fins de estudo, prática e demonstração de automação de testes de APIs REST utilizando JavaScript.
