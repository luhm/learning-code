# uso de *id* e *class* :
- id é mais específico que class, e tem amis força (1, 0, 0)
- class é no meio, entre id (0, 1, 0) e o normal
- no rocketseat eu aprendi a usar o id primeiro e colocar as coisas que valem pra tudo daquele box/container e colocar a class se eu quiser que seja algo só naquele
- falando com a Fê, ela falou de fazer ao contrário, usar id quando for o mais específico e for só praquele elemento específico, e class quando for um pouco mais geral
  - e manter no geral usando a tag sem identificador - por exemplo, se todo parte de texto eu usar a tag `<p>` , as características que eu usar nela eu coloco uma class ou uma id
## *CLASS*
- se colocar várias class `box` e usar, no CSS apenas .box, vai funcionar pra todas, por exemplo:
  - =”box abc”
  - = “box xyz”
  - .box { *vale pra todas* }
- usar classes pra estilizar mesmo os elementos do HTML normais.
  - Por exemplo, ao invés de usar p { } ou h1 { }, criar classes pra cada um deles
  - isso faz com que, caso precise mudar a estrutura do HTML, mudar de h1 pra h2 por exemplo, o estilo CSS se manteria (cor, font, tamanho etc)
- Se você tem uma página de `940px` de largura e precisa dividir em 5 colunas, não escreva `width:188px` porque você nunca vai lembrar da onde saiu esse valor. Prefira `width:20%` que mostra de maneira mais óbvia que é 1/5 do página.

# [Tipos de CSS](https://www.bitdegree.org/learn/style-html)
- inline
  - é quando a estilização é feita dentro do proprio html
  - apesar de ser possível usar em várias tags, ele deixa o código confuso, poluido e engessado
  - é comum de se usar na tag `hr` , por exemplo, que não aceita algumas estilizações no css “normal” (externo)
  - não é uma prática considerada boa e deve ser evitada
  
  ```html
  EXEMPLO:
  <p style="color:blue">TEXT HERE</p>
  ```
    
- externo
  - é o mais comum; é quando referenciamos uma stylesheet.css dentro do HTML, e dela são puxadas as características de estilo do projeto
  
  ```html
  EXEMPLO:
  <head>
  <link rel="stylesheet" type="text/css" href="style.css">
  </head>
  ```
    
- interno
  - é quando as regras do css são colocadas dentro do HTML, mas não individualmente em cada atributo e sim dentro da tag `head`
  - ele muda páginas específicas do projeto e não estiliza todas as páginas
  - pode ser mais lento para carregar

  ```html
  EXEMPLO:
  <head>
    <style>
      h1 {
        color: red;
        background-color: grey;
      }
      p {
        color: purple;
      }
    </style>
  </head>```
  
        
# Fontes
    - quando a fonte usada der algum erro, é bom referenciar a família dela no código para que a página leia uma fonte do mesmo “tipo” e não fuja muito da proposta nem dê maiores erros.
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/c8398193-6d0c-466c-a40e-ed7c18d7db81/3f05b955-33f6-410a-ad0a-1f5bbf6cecfa/image.png)
    
# Minificar
    - deixar o site mais rápido de ser carregado
    - os arquivos JS e CSS ficam menores
    - há ferramentas que fazem isso pra voce depois do CSS pronto
# Nomeações/Nomenclaturas
    - existem convenções de nomeação, uma delas é a BEM - Bloco, Elemento, Modificador
        - https://getbem.com/naming/
