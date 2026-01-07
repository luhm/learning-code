# Next.JS e React

## O que é?

- next é framework, react é biblioteca
- o next tem seu proprio router, não precisa de uma biblioteca externa pra isso (como a do react)
- tools
  - compiler
  - cli
  - node.js runtime (para executar código JS no servidor)
- baseado em arquivos e pastas

## Instalando

- `npx create-next-app@latest`
- usar configurações recomendadas
- mudar para a pasta do projeto e rodar `npm run dev`

## Estrutura básica

- pasta app é o app router
  - onde ficam os arquivos básicos do projeto
- pasta public tem as imagens/assets
- public tem os arquivos de configuração das ferramentas (tailwind, next etc)
  - normalmnete não mexemos

- dentro da pasta app criamos a pasta users
  - dentro dela temos um arquivo `page.tsx`
    - dentro dele digitamos `rafce` para criar a estrutura básica da página
- cada pasta é uma rota onde teremos uma página a ser acessada pelo usuário
- na `page.tsx` principal, ao linkarmos uma das pastas/rotas que criamos, usamos a tag `Link` ao invés de `a`, pois isso ajuda no carregamento da página e na velocidade