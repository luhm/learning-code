# Problem Solving

> baseado no artigo do [Odin Project](https://www.theodinproject.com/lessons/foundations-problem-solving)

## 3 Steps

### Step 1 - entendimento

- entender qual o problema
- é bom escrever num papel e reescrever até que faça sentido
    - pode criar diagramas também

### Step 2 - planejamento

- planejar
- responder algumas perguntas, como:
    - Does your program have a user interface? What will it look like? What functionality will the interface have? Sketch this out on paper.
    - What inputs will your program have? Will the user enter data or will you get input from somewhere else?
    - What’s the desired output?
    **- Given your inputs, what are the steps necessary to return the desired output?**
- reconhecer subproblemas
- começar pelo mais simples


### Step 3 - pseudocódigo

> writing out the logic for your program in natural language instead of code

- syntax-free description of an algorithm
- escrever o passo a passo de forma linear
- seguir a sequencia abaixo:
    1) SEQUENCE represents linear tasks sequentially performed one after the other.
    2) WHILE is a loop with a condition at its beginning.
    3) REPEAT-UNTIL is a loop with a condition at the bottom.
    4) FOR is another way of looping.
    5) IF-THEN-ELSE is a conditional statement changing the flow of the algorithm.
    6) CASE is the generalization form of IF-THEN-ELSE. 

![alt text](<Screen Shot 2025-01-19 at 11.54.37.png>)

- exemplo:

> - When the user inputs a number
> - Initialize a counter variable and set its value to zero
> - While counter is smaller than user inputted number increment the counter by one
> - Print the value of the counter variable

❗ é normal não saber todos os passos

## Erros

- Impedem o código de funcionar
- throw é o verbo usado para dizer que apareceu um erro
- a mensagem de erro mostra 2 informações básicas:
    - primeira parte: tipo de erro e porque do erro
    - segunda parte: onde tá acontecendo (em qual arquivo e linha)
        - pode aparecer mais de um local, pois mostra o caminho de erros referente aquele tipo e porque (stack trace)
            - por exemplo: uma variável não é declarada e mais de uma função é afetada por isso

### Tipos de erros

- referenceError: quando uma variável não foi declarada
- syntaxError: erro de escrita do código
- typeError: tem a ver com o tipo de dado que voce ta usando
    - an operand or argument passed to a function is incompatible with the type expected by that operator or function;
    - when attempting to modify a value that cannot be changed
    - when attempting to use a value in an inappropriate way

### Erros vs Warnings

- warnings são avisos sobre potenciais erros
    - não necessariamente vão afetar seu codigo/programa
    
