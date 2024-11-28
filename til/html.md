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
      - <(nome da tag) (atributo)=”conteudo do atributo”>conteúdo da tag</tag>
    - quando for uma tag com atributo sem conteúdo escrito (por exemplo, uma imagem, com um link direto), aí não precisa tudo isso, só finalizar ela nela mesma
      - <(nome da tag) (atributo)=”conteudo do atributo” />
    - Quando o atributo for id=”nome”, não pode ter outra tag com esse mesmo atributo+conteúdo
- Muitas coisas podem ser estruturadas em caixas
  - podem ter várias caixas dentro de caixas
  - <div> é uma tag para caixa, genérica, sem estilo específico
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
    - ícone da tab do brouser
      - `<link rel="icon" sizes="16x16 32x32 48x48" type="image/png" href="/images/mlwicon.png" />`
    - 


## links legais

[WebDev](https://web.dev/learn/html])

[FrontEnd Editor](https://www.fronteditor.dev/conceitos-html)
