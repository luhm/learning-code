# HTML

- semantica é o papel do elemento
  - é importante para tecnologia assistivas e para alguns sistemas de busca
- Elemento HTML = tags: é uma markup, uma marcação específica com alguma função
  - por exemplo, criar alguma coisa
    - sintaxe (como escrever) da tag:
    - sempre vem entre os sinais <>
    - <(nome da tag)>conteúdo<(/nome da tag)>
  - atributos
    - informações extras/configurações
    - sintaxe do atributo:
      ```html
      <(nome da tag) (atributo)=”conteudo do atributo”>conteúdo da tag</tag>
      ```
    - quando for uma tag com atributo sem conteúdo escrito (por exemplo, uma imagem, com um link direto), aí não precisa tudo isso, só finalizar ela nela mesma
      ```html
      <(nome da tag) (atributo)=”conteudo do atributo” />
      ```
    - Quando o atributo for id=”nome”, não pode ter outra tag com esse mesmo atributo+conteúdo
- Muitas coisas podem ser estruturadas em caixas
  - podem ter várias caixas dentro de caixas
  - `<div>` é uma tag para caixa, genérica, sem estilo específico
- Identação: é aquela visualização do código um pouco recuado

## Tipos de elementos

- Non-replaced:
  - eles são de texto (e podem ter outras tags dentro dele, como as que deixam o texto itálico)
  - não dá para substituir
  - normalmente tem tags de abertura e fechamento
- Replaced:
  - são substituidos por objetos, como imagens
  - alguns são também void elements, alguns não
- Void elements:
  - não precisam de fechamento
  - não podem conter texto
  - não tem elementos acumulados dentro deles
  - pode finalizar com uma / sozinha
    - é algo antigo de se fazer, mas pode ajudar a leitura do codigo
  - exemplos: `<br>`, `<img>`, `<link>`

## Atributos

- são caracteristicas que podem ser adicionadas aos elementos
  - cores, funcionalidades como links, comportamentos
![image](https://github.com/user-attachments/assets/3c11c543-fb51-4b04-b355-f9ab635d8326)
- alguns são globais e outros em tags específicas
- normalmente a sintaxe é:
  - ```html
    <tag atributo="valor"> </tag>
    ```
- Document Object Model (DOM)
  - é a representação em dados da estrutura e conteúdo do HTML

## Estruturas

- `<!DOCTYPE html>`: diz pro browser qual o tipo de codificação/documento
- `<html>`: é a tag que abre o documento
  - pai do `<head>` e do `<body>`
  - `lang`: atributo que diz qual o idioma
    - enables screen readers, search engines, and translation services to know the document language
    - pode ocorrer em outras partes da página, se mudar o idioma utilizado
- `<head>`: document metadata header
  - não tem o conteúdo visível
  - infos necessárias:
    - `charset`: character encoding;
      - diz pro navegador quais o caracteres que usamos (inclusive emojis etc)
      - usar mais comumente o UTF-8
      - `<meta charset:"utf-8 />"`
    - `title`: é o que aparece na tab do site
    - `viewport`: `<meta name="viewport" content="width=device-width" />`
      - enables controlling a viewport's size and scale, and prevents the site's content from being sized down to fit a 960px site onto a 320px screen
    - estilo
      - `<link rel="stylesheet" href="styles.css">`
      - para incluir css e estilos e dizer pro nosso html qual estilo ele vai usar
      - o uso de `rel` significa o tipo de relação que será feita naquele link, tipo a relação de style com stylesheet
        - | It's preferable to include those related to meta information in the head and those related to performance in the <body>.
        - [lista dos 25 tipos de relação](https://html.spec.whatwg.org/multipage/links.html#linkTypes)
    - ícone da tab do browser
      - value `icon`
      - `<link rel="icon" sizes="16x16 32x32 48x48" type="image/png" href="/images/mlwicon.png" />`
    - representações alternativas do site
      - value `alternate`
      - `<link rel="alternate" href="https://www.machinelearningworkshop.com/fr/" hreflang="fr-FR" />`
      - `<link rel="alternate" href="https://www.machinelearningworkshop.com/pt/" hreflang="pt-BR" />`

## Tags de estilização do texto

- `<b>` deixa negrito, porém `strong` é uma tag que possibilita que os mecanismos de busca e leitura/acessibilidade compreendam e deem destaque a essa palavra também
  - strong tem uma força semântica no html, mostrando que é um texto forte, de importância
- `<em>` é uma tag que significa emphasys e substitui `<i>`, de itálico
- `<u>` é sublinhado, mas não é indicado
  - é mais indicado usar o css, colocando o texto alvo do estilo dentro da tag `<span>` 
- `s` riscado
- `mark` destaca um texto, tipo um marcatexto
- `pre` é uma tag que adiciona um texto pre-formatado como código
- `code` insere um código em linha, tipo o que `` faz em markdown
- `blockquote` coloca um bloco de citação
- `sup` e `sub`na parte superior ou inferior

## Tags semânticas

- vão dentro do `body`
  - elas não mudam estilo, mas a semântica da página
  - o estilo delas é alterado no css
- `header` - cabeçalho da página
  - dentro dele colocamos a tag `nav` que indica uma barra de navegação
- `main` - conteúdo principal
  - `section` - faz seções
  - `article` - é tipo o artigo de um blog
    - pode colocar dentro dela as divisões de `header`, `main` e `footer`
- `aside` - uma parte do conteúdo principal que fica ao lado do main
  - pode ser colocado dentro ou fora da tag `main`
- `footer` - rodapé
- `figure` é uma tag semantica que indica que ali há imagens
  - pode colocar várias imagens dentro dessa tag
  - pode colocar `figcaption` que coloca uma legenda

## Tabelas

- inicia com `table`
- `th` ou `thead` para os cabeçalhos da tabela
- `tb` ou `tbody` para o corpo da tabela
- `tr` (table row) para fazer uma linha da tabela
- `td` (table data) para fazer as colunas
- dentro de tr ou td, usar o atributo `rowspan` e o numero de linhas ele vai pegar
  - aí, quando ele tá tipo `rowspan = "3"`, a gente pode apagar aquela informação das linhas seguintes
  - para mesclar colunas é `colspan`

## Formulários

- `form` dentro do `body`
- `input` é a primeira e muito importante, ela tem muitas propriedades e ela não tem fechamento
  - **boas praticas**: colocar ela dentro de um div que contenha também uma tag `label` que coloca um atributo `for="(aqui coloca para que é essa label, usando id no input)"`
  - propriedade padrão dela é o atributo `type="text"`
  - `placeholder="coloca o texto que aparece dentro da caixa de texto quando ninguem escreve nela"`
  - `name` é o atributo que adiciona o nome pelo qual o JS vai reconhecer esse campo do Formulário
- `type` de `input`
  - password - já oculta os caracteres
  - email - semanticamente já deixa claro que ali é um email e precisa de @
  -

## Links legais

[WebDev](https://web.dev/learn/html])

[FrontEnd Editor](https://www.fronteditor.dev/conceitos-html)
