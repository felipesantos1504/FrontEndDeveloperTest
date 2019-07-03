# FrontEndDeveloperTest

Sugestão de arquitetura para App Angular 8 (v 8.0.3).

Dar clone nesse Projeto e logo após `npm i` para instalar a última versão das dependências do app e iniciar o desenvolvimento.

## Development server

Digite `npm start` para começar. O browser será aberto automaticamente em `http://localhost:4200/`.

## Guard

O guarda de rota está na pasta `guards` o `auth.guard.ts` ele depende de um serviço de autenticação que contem o token e retorna se o usuário está autenticado ou não a partir daí deixa o usuário navegar.

## Padrão de escrita

Sempre que possível seguir o style guide do angular para seguir o padrão e facilitar outros devs angular a entender o código, coisas como separar variáveis, métodos entre privados e públicos em ordem alfabética, não ultrapassar 700 linhas em um .ts, ter funções com até 70 linhas e por ai vai.

* [Style Guide Angular](https://angular.io/guide/styleguide) - Angular.io

## Paths

Ao adicionar modulos certifique-se de adicionar seu caminho aos paths do arquivo `tsconfig.json` para simplificar os caminhos dos imports.

Reinicie sua IDE para certificar de que os paths serão reconhecidos.

```sh 
"paths": {
      "core/*": ["src/app/core/*"],
      "guards/*": ["src/app/guards/*"],
      "feature/*": ["src/app/feature/*"],
      "shared/*": ["src/app/shared/*"]
    }
```

## Proxy

Adicione os end-points da sua api no arquivo `proxy.conf.json` para evitar problemas com CORS (desenvolvimento apenas) neste projeto não é necessário devido ao cors ser liberado na API mas é um recurso interessante que está sendo utilizado.

* [Fazendo o CORS seu amigo](https://www.hiago.me/2018/09/08/ionic-angular-fazendo-o-cors-seu-amigo/) - By Hiago.
* [Proxying to a backend server](https://angular.io/guide/build#proxying-to-a-backend-server) - Angular.io.

```sh 
{
  "/api": {
    "target": "https://reqres.in",
    "secure": true,
    "changeOrigin": true,
    "logLevel": "debug"
  }
}
```

## Interceptors

Na raiz do app há um interceptor na pasta `interceptors` o arquivo `custom-http.interceptor.ts` para que você possa interceptar os requests feitos pela sua aplicação,
é possível adicionar/remover headers, exibir mensagens de erro padrão baseado no retorno do request/response e etc. Para mais informações visite a documentação do angular:

* [Intercepting-requests-and-responses](https://angular.io/guide/http#intercepting-requests-and-responses) - Angular.io.

Através do interceptor é que adiciono o header de autenticação.

## Estrutura de Arquivos

As pastas estão organizadas desta maneira, cada módulo tem suas pastas `component`, `directives`, `models`, `pages`, `pipes` e `services`, dentro das pastas existe um arquivo `index.ts` para exportar os arquivos da pasta para deixar mais simples muitos imports.

Existem 4 módulos são eles `auth` responsável pela autenticação, `core` que contém o que é essencial para o app funcionar, `users` integração com a API solicitada e `shared` que compartilha tudo o que deve ser comum a todos os módulos.

```sh 
📦src
 ┣ 📂app
 ┃ ┣ 📂auth
 ┃ ┃ ┣ 📂components
 ┃ ┃ ┣ 📂models
 ┃ ┃ ┣ 📂pages
 ┃ ┃ ┣ 📂pipes
 ┃ ┃ ┣ 📂services
 ┃ ┃ ┣ 📜auth-routing.module.ts
 ┃ ┃ ┗ 📜auth.module.ts
 ┃ ┣ 📂core
 ┃ ┃ ┣ 📂components
 ┃ ┃ ┣ 📂directives
 ┃ ┃ ┣ 📂models
 ┃ ┃ ┣ 📂pages
 ┃ ┃ ┣ 📂pipes
 ┃ ┃ ┣ 📂services
 ┃ ┃ ┣ 📜core.component.ts
 ┃ ┃ ┗ 📜core.module.ts
 ┃ ┣ 📂guards
 ┃ ┃ ┗ 📜auth.guard.ts
 ┃ ┣ 📂interceptors
 ┃ ┃ ┗ 📜custom-http.interceptor.ts
 ┃ ┣ 📂shared
 ┃ ┃ ┣ 📂components
 ┃ ┃ ┣ 📂directives
 ┃ ┃ ┣ 📂models
 ┃ ┃ ┣ 📂pages
 ┃ ┃ ┣ 📂pipes
 ┃ ┃ ┣ 📂services
 ┃ ┃ ┗ 📜shared.module.ts
 ┃ ┣ 📂users
 ┃ ┃ ┣ 📂components
 ┃ ┃ ┣ 📂directives
 ┃ ┃ ┣ 📂models
 ┃ ┃ ┣ 📂pages
 ┃ ┃ ┣ 📂pipes
 ┃ ┃ ┣ 📂services
 ┃ ┃ ┣ 📜users-root.component.html
 ┃ ┃ ┣ 📜users-root.component.scss
 ┃ ┃ ┣ 📜users-root.component.ts
 ┃ ┃ ┣ 📜users-routing.module.ts
 ┃ ┃ ┗ 📜users.module.ts
```