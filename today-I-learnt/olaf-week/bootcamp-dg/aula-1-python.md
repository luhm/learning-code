# Fundamentos de Python

- podemos usar uma variavel dentro de outra, usando `f` antes da variável
    ```python
        nome = "João"
        mensagem = f"Olá, {nome}!"
    ```

## Tipos de dados em Python

### numérico

- int - inteiros
- float - com decimal
- complex - numeros complexos (numericos + caracteres)

- para ver o tipo de dado, podemos usar a função `type()`

### booleanos

- bool - valores lógicos - true, false

### strings

- sequencias de caracteres
    - entre aspas simples ou aspas duplas

### listas

- usa colchetes, com elementos separados por virgulas
    ```python
        frutas = ["maçã", "banana", "pera", "uva"]
    ```
- usa a função `list`
    ```python
        list("banana")
    ```
    - essa função recebe apenas um elemento e lista o que tem nele
        - se for uma palavra, vai listar as letras dela
        - se for uma variável, vai lista tudo que tem na variável
        ![alt text](image.png)
- os elementos da lista começam como 0
- manipulando listas:
    - alterando elementos:
    ```python
    frutas[1] = "laranja"
    ```
    - inserção de elementos - usar a função `append`
        - anexa na ultima posição
    ```python
    frutas.append("laranja")
    ```
    - saber a posição de um elemento - usar a função `enumerate`
    ```python
    for i, fruta in enumerate(frutas):
    print(f"Posição: {i}, fruta: {fruta};")
    ```
    ![alt text](image-1.png)
    - juntar duas listas em uma - tem duas formas:
        - criando uma nova variável com o sinal de `+` - cria uma **lista nova** com uma **nova variável**
        ```python
        frutas_raras = ["rabutã", "physalys"]
        frutas_completas = frutas + frutas_raras
        ```
        ![alt text](image-2.png)
        - usando a função `extend` - **adiciona** a segunda lista na primeira
        ```python
        frutas.extend(frutas_raras)
        print(frutas)
        ```
    - remover elemento da lista
        - função `remove` - se remover algo que não exite na lista, ele retorna um erro
        ```python
        frutas.remove("laranja")
        print(frutas)
        ```
        - função `pop` vazia - remove apenas o ultimo elemento
        ```python
        frutas.pop()
        print(frutas)
        ```
        - se quiser retirar de uma posição específica, é só colocar o numero correspondente dentro da função `pop` (0 retira o primeiro elemento da lista)
            - essa função altera a posição e o índice dos elementos restantes na lista
        ```python
        frutas.pop(0)
        print(frutas)
        ```
        
