# 🍽️ App de Receitas

Aplicação web de receitas de **comidas e bebidas**, desenvolvida em **React** como projeto em grupo para avaliar os conhecimentos do **módulo de front-end** do curso da Trybe.

O app consome APIs públicas de receitas e permite buscar, explorar, favoritar, compartilhar e acompanhar o preparo de pratos e drinks, tudo no navegador, sem backend próprio.

> 📌 **Repositório original (com o histórico completo do projeto na turma):** [VitorN200/sd-08-project-recipes-app](https://github.com/VitorN200/sd-08-project-recipes-app)
>
> - Branch da entrega, com os requisitos funcionais: [`main-group-23`](https://github.com/VitorN200/sd-08-project-recipes-app/tree/main-group-23)
> - Branch com a versão estilizada: [`main-group-23-css`](https://github.com/VitorN200/sd-08-project-recipes-app/tree/main-group-23-css)
>
> Este repositório reúne as duas versões, com o histórico de commits preservado, além de ajustes feitos depois para facilitar a execução e a publicação (veja [Melhorias após o projeto](#-melhorias-após-o-projeto)).

---

## 👥 Contexto do projeto

- **Projeto em grupo**, desenvolvido durante o módulo de front-end.
- O objetivo era aplicar, em um app completo, os conteúdos do módulo: componentização, rotas, estado global com Context API, consumo de APIs, hooks e testes.
- O projeto foi entregue com **todos os requisitos de avaliação atendidos**.
- Em abril de 2021, depois que os requisitos passaram, o visual do app foi desenvolvido por mim em uma branch separada (`main-group-23-css`), que está incorporada a este repositório.

## 🏆 Reconhecimento

O nosso projeto foi **escolhido entre os projetos da turma** para ser apresentado às turmas seguintes, como exemplo de um projeto bem executado. Teve boa recepção dos professores, e eu apresentei o projeto para outros grupos.

## 🙋 Minha contribuição

Atuei no desenvolvimento do front-end e também na integração do trabalho do grupo. Minhas principais entregas:

- **Cabeçalho (Header)** com título dinâmico por página, ícones de perfil e busca, e a **barra de pesquisa** de receitas (por ingrediente, nome ou primeira letra).
- **Telas de Comidas e Bebidas**, com o cabeçalho integrado.
- **Rodapé (Footer)** de navegação entre as seções.
- **Telas de Explorar**: explorar comidas e bebidas, busca por ingredientes e por origem.
- **Tela de Perfil** e **tela de Receitas Feitas**.
- **Estilização do app:** CSS das telas de login, Comidas, Bebidas, Explorar, Detalhes da receita, Receita em andamento, Perfil, Receitas Feitas e Receitas Favoritas, além da inclusão da logo, da animação de abertura da barra de pesquisa e da troca dos ícones de favoritar e compartilhar.
- **Correção de bug:** erro ao finalizar uma receita de bebida.
- **Integração e qualidade:** revisão e merge dos Pull Requests do grupo, resolução de conflitos entre branches, correção de erros de lint e ajustes finais até todos os requisitos passarem.

## ✨ Funcionalidades

- **Login simulado**, sem backend: use qualquer e-mail em formato válido (por exemplo, `teste@email.com`) e uma senha com **7 ou mais caracteres** (por exemplo, `1234567`).
- Listagem de **comidas** e **bebidas**, com filtro por categoria.
- **Busca** pelo cabeçalho: por ingrediente, nome ou primeira letra.
- **Explorar** receitas por ingrediente, por origem (comidas) ou com a opção **"Me Surpreenda!"** (receita aleatória).
- **Detalhes da receita:** ingredientes, instruções, vídeo (quando há) e receitas recomendadas.
- **Receita em andamento:** checklist de ingredientes e botão para finalizar a receita.
- **Favoritar** e **compartilhar** receitas (copia o link para a área de transferência).
- Telas de **Receitas Feitas** e **Receitas Favoritas**, com filtro por tipo.
- Perfil do usuário e persistência de favoritos, receitas feitas e progresso no `localStorage`.

## 🛠️ Tecnologias

- [React 16](https://reactjs.org/) e [React Router 5](https://v5.reactrouter.com/)
- **Context API** e Hooks
- [React Bootstrap](https://react-bootstrap-v4.netlify.app/) e CSS
- Fetch API para consumo das APIs
- APIs públicas [TheMealDB](https://www.themealdb.com/api.php) e [TheCocktailDB](https://www.thecocktaildb.com/api.php)
- [Cypress](https://www.cypress.io/) para testes de ponta a ponta
- ESLint e Stylelint

---

## 🚀 Como executar localmente

Pré-requisitos: [Node.js](https://nodejs.org/) e npm.

```bash
# 1. Clone o repositório
git clone https://github.com/VitorN200/recipes-app.git
cd recipes-app

# 2. Instale as dependências
npm install

# 3. Rode em modo de desenvolvimento
npm start
```

Acesse `http://localhost:3000`.

### ⚠️ Node.js 17 ou superior

O projeto usa `react-scripts` 3.4.1, que é antigo. Em Node 17+ o comando `npm start` ou `npm run build` pode falhar com o erro `ERR_OSSL_EVP_UNSUPPORTED`. Há duas soluções:

- Usar o **Node 16** (por exemplo, com `nvm use 16`), ou
- Definir a variável de ambiente antes de rodar:

```bash
# Linux / macOS
export NODE_OPTIONS=--openssl-legacy-provider

# Windows (PowerShell)
$env:NODE_OPTIONS="--openssl-legacy-provider"
```

### Gerar a versão de produção

```bash
npm run build
npx serve -s build
```

O parâmetro `-s` é necessário porque o app usa rotas do lado do cliente (`BrowserRouter`).

### ▲ Deploy na Vercel

O repositório já inclui um `vercel.json` com tudo o que o app antigo precisa para ser publicado, então basta importar o projeto na Vercel (o framework Create React App é detectado automaticamente):

- **Instalação:** `CYPRESS_INSTALL_BINARY=0 npm ci`, para não baixar o binário do Cypress, que só é usado nos testes.
- **Build:** `CI=false NODE_OPTIONS=--openssl-legacy-provider npm run build`. O `CI=false` evita que avisos de lint derrubem o build, e o `NODE_OPTIONS` contorna o erro de criptografia do `react-scripts` 3.4.1 em Node 17+.
- **Rotas:** todas as URLs são redirecionadas para o `index.html`, para o React Router funcionar ao abrir direto links como `/comidas/52771`.

Se o build falhar na versão de Node padrão da Vercel, escolha o Node 22 ou 20 em **Settings → Build and Deployment → Node.js Version**.

### Testes (Cypress)

Com o app rodando em `http://localhost:3000`:

```bash
npm run cy        # executa os testes no terminal
npm run cy:open   # abre a interface do Cypress
```

---

## 🔧 Melhorias após o projeto

Depois da entrega, fiz estes ajustes para o projeto poder ser executado e publicado fora do ambiente do curso:

- Remoção de arquivos específicos da plataforma de ensino (workflow de avaliação, configuração de requisitos).
- Os botões de compartilhar passaram a copiar o endereço do site em que o app está rodando (`window.location.origin`), e não mais `http://localhost:3000` fixo.
- Título da página e README atualizados.
- Documentação do deploy e da execução em versões recentes do Node.

---

## 📄 Observações

- O projeto tem fins educacionais.
- As APIs TheMealDB e TheCocktailDB são públicas e usam a chave de testes gratuita. Podem ter limites ou ficar indisponíveis.
