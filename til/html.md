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
    <tag> atributo="valor" </tag>
    ```
- Document Object Model (DOM)
  - é a representação em dados da estrutura e conteúdo do HTML

## links legais

[WebDev](https://web.dev/learn/html])

[FrontEnd Editor](https://www.fronteditor.dev/conceitos-html)
