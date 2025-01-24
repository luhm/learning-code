# The Odin Project

## Exercício de [Problem Solving](../logic/problem-solving.md)

> Write a program that takes a user’s input and prints the numbers from one to the number the user entered. However, for multiples of three print Fizz instead of the number and for the multiples of five print Buzz. For numbers which are multiples of both three and five print FizzBuzz.

- Preciso de um programa que pegue um número que o usuário envie e escreva todos os números de 1 até aquele escolhido pelo usuário. Quando o número for multiplo de 3, ele escreverá *Fizz*; quando for multiplo de 5, escreverá *Buzz*; quando for multiplo dos dois, escreverá *Fizz Buzz*.

- Passo a Passo:

    1) pedir para o usuário colocar um número (usar prompt)
    2) pegará o número escolhido e escreverá todos os numero de 1 ao escolhido
    3) escreverá Fizz se for multiplo de 3
    4) escreverá Buzz se for multiplo de 5
    5) escreverá Fizz Buzz se for multiplo dos dois
    6) se der erro, escreva o numero escolhido apenas

- Passo-a-passo original:

> - When a user inputs a number
> - Loop from 1 to the entered number
> - If the current number is divisible by 3 then print "Fizz"
> - If the current number is divisible by 5 then print "Buzz"
> - If the current number is divisible by 3 and 5 then print "FizzBuzz"
> - Otherwise print the current number

## [Resolução em JS](./problemsolving.js)

- não foi super difícil, fez até sentido, tive mais dificuldade de escrever o pseudocodigo do que o código em si
- **principais duvidas que tive:**
    - como fazer pegar o numero do prompt e o que era `parseInt`
    - como fazer pra pegar os multiplos dos numeros (não pensei em pegar o resto da divisão com `%`)