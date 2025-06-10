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
    - inserção de elementos
        - usar a função `append` - anexa na ultima posição
        ```python
        frutas.append("laranja")
        ```
        - usando a função `insert` - adiciona o elemento em uma posição
        ```python
        frutas.insert(2, caqui)
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
    - saber o tamanho da lista - função `len`
        ```python
        print(f"Tamanho da lista é {len(frutas)}")
    - ver apenas um pedaço da lista - colocar o intervalo que quer saber
        - não inclui o ultimo numero colocado (no exemplo abaixo, não inclui a posição 2)
    ```python
    print(frutas[0:2])
    ```
    ![alt text](image-3.png)
    - ordenar uma lista
        - função `sort()`
            - não precisa de uma variável associada
            - ordena alfabeticamente
        - função `sorted`
            - precisa ter uma variável associada, mesmo que ela seja a mesma que estamos usando.
        ![alt text](image-4.png)
    - limpar a lista, removendo tudo - função `clear`

### Tuplas

- é uma coleção ordenada, porém imutável
    - retorna um erro caso tente mudar um elemento
- **inserir um elemento**
    - tupla existente + novo valor
- dá para fazer um `count` para saber quantas vezes um elemento aparece em uma tupla
- usando a função `index`, podemos saber quando é a primeira ocorrência - retorna o numero da posição 

### Dicionários (dict)

- coleção de palavras chave-valor
    ```python
    integrantes = {"nome" : "Luiza", "idade" : 34}
    ```
    - com a função `keys` eu consigo ver apenas as chaves;
    - com a função `values` eu consigo ver apenas os valores;
    - com a função `items` eu consigo ver todos os pares;
    ![alt text](image-5.png)
    ![alt text](image-6.png)
- acessar valores com base nas chaves
    - usando `get()` - se a chave existir ele retorna o valor, se **não existir** ele retorna `none`
    ```python
    print(integrantes.get("idade"))
    ```
- inserir valores em uma nova chave é só colocar a variável com a nova chave entre `[]`e depois adicionar o conteudo
    ![alt text](image-7.png)
- alterar o valor de uma chave existente é parecido com o de inserir nova chave, porém voce coloca uma chave já existente e um novo valor pra ela.
- adicionar uma nova chave-valor
    - criar uma nova variável dict
    - usar a função `update`
    ![alt text](image-9.png)
    - **PORÉM**, se as chaves tiverem o mesmo nome, os valores da primeira serão substituídos pelos valores da segunda
    ![alt text](image-8.png)
- a função `pop` também funciona aqui para retirar o par chave-valor
    - se usar `popitem` ele retira o ultimo par chave-valor
- a função `clear` também funciona aqui

### Conjuntos (sets)


