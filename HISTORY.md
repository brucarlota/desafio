- API
Fastify: Open source, alta performance, baixa latência, alta escalabilidade. 

## Ideia inicial:
- Criar api em node utilizando fastify, mockando os retornos. Implementar testes unitarios. # backend
- Criar o Bff utilizando graphQl e node. #bff-graphql
- Criar o frontend com React, que consulta atraves do bff #frontend

### Backend
- [Fastify](https://fastify.dev/) é um framework open-source simples e robusto para criar servidores com rapidez.

### BFF with Graphql
- [Documentação](https://www.apollographql.com/docs/apollo-server/getting-started/)

### Frontend
[Vite](https://vitejs.dev/) é uma ferramenta de desenvolvimento que permite criar projetos de forma rápida e enxuta, além possuir o próprio setup (ou bem mais simples) de testes ([vitest](https://vitest.dev/api/vi.html))
[Zustand](https://zustand-demo.pmnd.rs/) para gerenciamento de estados a nível de contexto para o react

Passos:
- criar repositorio React + vite
- criar os componentes que vou utilizar para o formulario (input, select, button) utilizando mui material
- criar paginas e carregar dados
- estilizar

#### Estilizacao: 
- [Material UI](https://mui.com/material-ui/getting-started/) is an open-source React component library that implements Google's Material Design.
- [Emotion](https://emotion.sh/docs/introduction) the default Material Ui library, designed for writing css styles with JavaScript.

## O que eu faria se tivesse mais tempos
- Implementaria autenticacao na API
- Criaria uma documentacao (ex. swagger, stoplight)
- Paginação
- Aumentaria a cobertura de testes para > 90%
- Incluiria alguns detalhes na estilização