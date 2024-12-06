# CSS

- Dá estilos ao HTML.
- “Cascading Style Sheet”
- Composto por **declarations** (declarações):
  - pedaços de código que se referem e aplicam alterações a uma parte do HTML
  - Como escrever?
  - seletor (usa uma tag, por exemplo body). ex:

    ```css
    Seletor {
    propriedade: valor;
    }
    ```

  - sempre termina uma instrução com ponto e vírgula;
  - sempre coloca chaves após o seletor e ao final da declaração
  - se colocar a instrução com /* no início e */ no final, ela será ignorada, ficará como comentário

- Quando há mais de uma informação, a ultima é mais relevante. Por exemplo, se houver duas informações sobre cor, a ultima será mais relevante.

## Especificidade

- tem prioridade sobre a cascata
- cada seletor tem um peso
- é possível colocar um id em um elemento da página, por exemplo:

```css
<p id=”primeiro”> algo</p>
<p>outro</p>
```

- colocando um id, é possível colocar características específicas naquele elemento, mesmo que ele tenha a mesma tag que outros
- no CSS, nem é preciso colocar a tag, apenas o id:

```css
p#obs {
color: rgb(110, 10, 10)
}
```

OU

```css
  #obs {
  color: rgb(110, 10, 10)
  }
```

  - OBS: porém, se voce utilizar uma vez apenas o id (segunda opção) e na outra com a tag (primeira opção), ele vai considerar a que é mais específica (com a tag) para aplicar
- força desses elementos:
  - id = 1,0,0
  - class = 0,1,0
  - normais = 0,0,1

## Box model

- tudo é visto como caixas
- possuem propriedades específicas:
  - largura
  - altura
  - conteúdo
  - borda
  - espaço interno
  - espaço externo

![image](https://github.com/user-attachments/assets/f53845bf-0d22-403f-ac91-09caf477135d)

- mais ou menos: cada tag é uma caixa
```css
body {
  background: rgb(172, 113, 172);
  border: 5px solid burlywood;
}
p {
  border: 1px solid white;
  color: white
}
#obs {
  color: rgb(153, 12, 12);
}
.dicas {
  color:greenyellow;
}
```

![image](https://github.com/user-attachments/assets/80be43ba-724d-41e2-825b-23da0d472a8b)

- o display tradicional é block, porém podemos colocar display inline, por exemplo, e ele colocar uma caixa ao lado da outra.
  - span, a e img são tags que tem display automaticamente inline
- Quando criamos uma caixa, ela pode ter várias caixas dentro dela
  - podemos especificar tamanho (height e width)
    - height não é  colocado na maior parte das vezes, pois a caixa vai aumentando a altura de acordo com os elementos internos dela
  - podemos colocar valor das margens, ou seja, espaço entre a borda da caixa e a borda total da tela
    - se usarmos margin: auto ela vai colocar o mesmo valor nas laterais esquerda e direita, porém não vai alterar as top e bottom
    - elementos inline não aceitam a formatação margin: auto, por isso podemos:
      1. mudar o display para block, ao inves de inline
      2. colocar uma configuração no “pai” dele de text-align: center, aí todo o texto naquela caixa pai estará seguindo essa regra

- os id e classes não podem começar com números
  - nem com caracteres especiais (apenas _)
 
- link interessante: [CSS Tricks](https://css-tricks.com/)

## Pseudo-elements

- são elementos para estilizar apenas uma parte do código, por exemplo a primeira letra da palavra/frase
- podem ser aplicados a classes específicas
- podem ter vários pseudo-elements ao mesmo tempo
- sintaxe:
  ```css
  seletor::pseudo-element {
    propriedade: valor;
  }
  ```

- é usado o ::
- o : sozinho é pseudo-class
- [Lista completa de pseudo-elements](https://www.w3schools.com/cssref/css_ref_pseudo_elements.php)

### Principais pseudo-elements

`::first-line`
- primeira linha
- pode mudar:
  - font properties
  - color properties
  - background properties
  - word-spacing
  - letter-spacing
  - text-decoration
  - vertical-align
  - text-transform
  - line-height
  - clear

`::first-letter`
- apenas em block level
- se aplica:
  - font properties
  - color properties
  - background properties
  - margin properties
  - padding properties
  - border properties
  - text-decoration
  - vertical-align (only if "float" is "none")
  - text-transform
  - line-height
  - float
  - clear
 
`::before`
- insere algo antes do conteúdo/elemento indicado

`::after`
- insere algo depois do conteúdo/elemento indicado

`::marker`
- altera os marcadores de uma lista

## Listas

- `list-style-type` é uma propriedade que altera o tipo de marcador, círculo, quadrado, numeros romanos etc
- `list-style-image` tranforma o marcador em uma imagem
- `list-style-position` diz se os marcadores estarão dentro ou fora da lista
  - pode ser outside ou inside
- se quiser usar todos na mesma linha, a ordem é: type position image

## at-rules

- são representadas por um arroba @
- exitem dois tipos, statments and blocks
- [lista de at-rules](https://www.w3schools.com/cssref/css_ref_atrules.php)
- instruem o CSS como agir
- Statements:
  - syntax
    ```css
      @identifier (RULE);
    ```
- block:
  - possui nela um conjunto de regras
  - podem se referir a animações, mudanças em cores (light e darkmode), 
  - syntax
    ```css
      @identifier (RULE) {
      }
    ```

## Flexbox e Grid

- ajudam com a criação de designs responsivos
- trazem flexibilidade
- é possível combinar os dois:
  - fazer uma página com um perfil de um lado e um conjunto de posts do outro
  - ![image](https://github.com/user-attachments/assets/e74e2760-7dd9-4522-8466-dd0972a1d489)

### Flexbox

- alinhamento e distribuição flexiveis
  - libera, dentro do css, "novas" regras que só funcionam se for flexbox
- dentro de um container
- organiza em colunas ou linhas
  - `flex-direction`: row ou column
  - `flex-wrap`: quebra a linha para que a quantidade de filhos flex exacerbar o layout da página
  - se você colocar, em um filho flex, `flex: 1` ou outro número, significa que a distância entre os elementos dele será 1 (sem unidade mesmo), e igual pra todos
    - se em um voce colocar 2 e deixar 1 nos outros, você tera um elemento ocupando o dobro do espaço.
  - [`align-itens`](https://developer.mozilla.org/pt-BR/docs/Web/CSS/align-items) mexe no eixo transversal
  - [`justify-content`](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content) 
- bom pra fazer barras de menus e status
- ![image](https://github.com/user-attachments/assets/be0c1d9e-7b96-49f8-be11-a397c4eaa293)


### Grid

- estruturas bidimensionais complexas
- controle de linhas e colunas ao mesmo tempo
  - típico para uma galeria de imagens
- é como um layout de tabela
  - `column-gap` e `row-gap` o espaço entre colunas ou linhas
- [todas as propriedades do grid](https://www.w3schools.com/css/css_grid.asp) 
