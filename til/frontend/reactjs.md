# React.js

- é uma biblioteca do JS
- flexível
- desenvolver interfaces de usuario, nao apenas web
- derivam do react
    - react Dom - web
    - react Native - mobile
    - electron - pra desktop
    - react TV - para tvs
    - react VR - realidade aumentada
- declarativo
- component-based
    - pequenos pedacos para desenvolver algo complexo
    - por exemplo, um site pode ter partes como header, body, footer
- aprende uma vez, escreve em qualquer lugar
- compilers - compilacao
    - usa o babel
    - no ts usamos `private` em um atributo, no react ele transforma isso pra `#` antes do atributo
- bundlers
    - usa o webpack.js
    - pega vários codigos JS e transforma em um só
- importacao de infos de outros arquivos
    - o Reacte usa ESmodules, e nao o CommonJS
    - sintaxe ESmodules: `import { informacao } from "./arquivo.js";`
- um arquivo componente do React tem extensao `.jsx` e o nome comecao com letra maiuscula

## Comecando um projeto

- usar o terminal direto e nao do vscode
- seguir as orientacoes que estao na [documentacao](https://react.dev/learn/start-a-new-react-project)
- no React, tudo gera em torno de app.js, e esse app é renderizado dentro do root do html
    - ele vai tendo vários arquivos que tem um fluxo de renderizacao que utiliza infos de varios arquivos que ficam na pasta src do proprio react
- trabalho com singlepage application - padrao de renderizacao
    - se quiser mais de uma pagina, ele usa o JS
    - outros tipos: SSR (server side rendering) e SSG (server side generation)

## Tipos de componentes

- react legado usa basicamente apenas classe, e nao function
- baseados em classes - inicia com `class`
    - é uma classe que herda (usando `extends`) a classe `Components` do react e retorna HTML
    - todos esses tem um metodo praticamente obrigatorio, que é o `render() {}`
        - é o metodo que renderiza o que voce quer na tela
        - para colocar mais de um componente no `render`, é necessário usar uma tag e dentro dela colocar os componentes, pois o render só aceita um componente "primario"
            - para isso existe a tag `< >` sem conteudo, chamada `fragment`
- baseado em funcoes - inicia com `function`

## Construindo o projeto

![alt text](image-10.png)
- acima está a estrutura básica de um doc react
- sempre que quiser pegar algo do JS e usar no HTML (para que o conteudo dele, por exemplo de um atributo de um objeto, apareca no html) é só colocar ele entre `{}`
![alt text](image-9.png)
- quando usar uma classe na parte de html do .jsx, usar `className`, `id`nao muda
- quando usar uma imagem no html (tipo o logo), fazer um import dela no react e depois adiciona no`src`da tag `a` do html com `{}`, tirando as aspas
- da para estilizar dentro direto do html do react

## Props

- vem de propriedades
- passar dados para dentro de um componente
- nesse exemplo, criamos a prop `title` que em cada versao do artigo tem um nome, o que faz com que ele apareça na pagina renderizada com esses nomes diferentes
    - para isso acontecer precisa colocar, no lugar do titulo original do `.jsx` referente a esse article, {this.props.nomeDaNovaPropriedade}
![alt text](image-11.png)

## Estados

- é uma variável que, especificamente, o react fica monitorando pra saber se mudou o estado dela e aí ele atualiza a renderizacao dela
- ele nao fica monitorando todas se nao a renderizacao seria muito pesada e ele seria pouco performatico
- dentro do constructor a gente cria um objeto com `this.state`
    - a sintaxe disso é:
    ```javascript
    export class Nome extends ClasseAntiga.Component{
        constructor() {
            super()
            this.state = { variavel }
        }
        render() {
            return (
            ...
            this.setstate({ contador: this.state.contador mudançaQueQuerFazer})
            )
        }
    }
    ```
## Formulario

- pegar infos de um formulário:
    - usando estados
    - colocando no constructor, já tem o `this.state` e dentro ja tem uma variárel, mas pode ter 2 ou 3
    - o `value` do campo do formulario vai ser `this.state.variavel`
    - para pegar o evento de digitacao do usuário, é só colocar nos atributos do `input` do formulario, um atributo especifio `onChange` que terá uma funcao dentro dele
        - aí usamos `(event) => [event.target.value]` como no exemplo mais complto abaixo
    ![alt text](image-12.png)

## Ciclo de vida

- fluxo de renderizacao
    - todas as etapas que o componente passa
- auxilia na otimizacao
- 3 fases:
    - montagem
    - atualizacao
    - desmontagem
- possuem métodos especificos para cada fase
- métodos:
    - montagem - construtor (sendo construido )
        - `componenteWillMount`
        - `componentDidMount`
        - `render`
    - atualizacao - render
        - pode usar funcoes com condicionais if...else



- [React JS - Documentary](https://www.youtube.com/watch?v=8pDqJVdNa44)
