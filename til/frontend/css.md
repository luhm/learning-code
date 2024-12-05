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
