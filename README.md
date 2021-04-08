# React GitHub Rest API [![Netlify Status](https://api.netlify.com/api/v1/badges/b9850853-29fb-47ec-932c-13a524b96543/deploy-status)](https://app.netlify.com/sites/relaxed-boyd-3ed8fc/deploys)

> Aplicação em React utilizando Sass, BEM CSS, react-testing-library, Axios, GitHub Rest API e Netlify.

[Ambiente de Produção](https://relaxed-boyd-3ed8fc.netlify.app/)

O ambiente de QA é gerado quando aberto um novo pull request.

## Rodando o projeto localmente

Será necessário a instalação das seguintes dependências:

- nodejs
- yarn

De preferência, instale a última versão do Node.js com o [NVM](https://github.com/nvm-sh/nvm).

Caso você não tenha nada instalado em sua máquina, utilize este tutorial para configurar o ambiente fullstack JavaScript: [Configurando o ambiente de desenvolvimento fullstack JavaScript](https://woliveiras.com.br/posts/configurando-o-ambiente-de-desenvolvimento-fullstack-javascript/)

Saiba mais sobre o NVM neste link: [Utilizando versões antigas do Nodejs](https://woliveiras.com.br/posts/utilizando-versoes-antigas-do-nodejs/).

### Rodando o servidor de desenvolvimento 

Para executar o servidor de desenvolvimento, execute o seguinte comando no seu terminal:

```sh
yarn start
```

Será aberto automaticamente o link [http://localhost:3000](http://localhost:3000) em seu navegador padrão.

### Rodando os testes 

Para executar os testes, execute o seguinte comando no seu terminal:

```sh
yarn test
```

### Obtendo o build de produção

Caso precise testar o build de produção em sua máquina, basta executar o seguinte comando no seu terminal:

```sh
yarn build
```

A pasta build irá aparecer no repositório com todos os arquivos necessários para deploy.

### Deploy em produção

O deploy para produção acontece automaticamente através do merge branch main.

Para acompanhar o deploy, você pode utilizar este link: [netlify.com/relaxed-boyd](https://app.netlify.com/sites/relaxed-boyd-3ed8fc/deploys)
