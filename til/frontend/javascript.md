# Lógica de programação em JS

- `console.log()` é a forma mais básica de saída de dados em JS
    - pode rodar no proprio console
    - log é uma informação
- mostrar algo em JS chamamos de `print`
- para linkar o arquivo JS com o HTML, é só colocar a tag `script` com um `src` que referencia o arquivo
    - sempre é a ultima coisa antes de fechar a tag `body`
- para comentar, usar `//`

## Variáveis

- é comum precisar guardar informações do usuário etc enquanto usam nossa aplicação e pra isso usamos variáveis
    - ver mais sobre variáveis em [intro à lógica de programação](https://github.com/luhm/learning-code/blob/6a1932f887efd3902ff42c7fd177990def5ca660/til/programming/intro-logica-de-programacao.md) e em [algoritmos](https://github.com/luhm/learning-code/blob/0bc6cc26347120abfb9f0f57af63f8c4cf5e9c93/til/programming/algoritmos.md)
- **camelCase**: é o nome dado ao formato de nomeação das variáveis em JS:
    - sempre a primeira letra minuscula e a primeira letra das outras palavras, maiusculas
- **tipos primitivos**: number, string, boolean
- **tipagem dinâmica**: o JS entende o tipo de variável
- **tipagem fraca**: facilmente se confunde nos tipos, misturando textos e numeros
    - não retorna um erro
    - diferente do TS, que é mais forte
- **coerção de tipos**:
   - ele converte de numero para texto e para booleano (onde apenas o 0 retorna false, qualuqer outro numero retorna true)
   - se tentar converter texto para numero, ele não vai dar erro, mas vai aparecer a msg NaN (Not a Number)
   - explicita/manual: voce muda o tipo da variável usando a formula 
    ```javascript
    const nome = Novotipo(o que ele vai entregar)
    ex:
    const numeroDaIdade = Number(idade)
    ```
    - implícita: ele faz automaticamente
        - se tentar somar um numero com uma string, ele transforma tudo em string
        ```javascript
        console.log(1+"1")
        retorna 11
        ```
        - se não for soma, ele transforma o string em numero e faz a operação normal
- é **case sensitive**: não pode escrever com letra maiúscula, não devolve a mesma coisa

## Criando variáveis
- `var` - não é a melhor
    - é uma variável global e pode ser usada em qualquer lugar do código, mesmo antes de ser declarada
    - isso é o hoisting
- `let` ou `const` são as melhores
    - `let` permite que voce altere depois (let it change)
        - voce precisa ter a variável antes de declarar ela
    - `const` não permite mudar
- `prompt` cria uma pergunta para o usuário do navegador com uma caixinha

## Operadores matemáticos

- usa os operadores normais de soma, subt, divisão e multiplicação
    - usa ** para fazer potencia
    - usa % para inficar resto de uma divisão
- usa uma biblioteca chamada [Math](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)

## Operadores booleanos

- fazem comparações
- usamos dois simbolos de igual `==`para comparar se são iguais
    - compara apenas o valor
    - `===`compara valor e tipo - **É UMA BOA PRÁTICA**
    - `=` simbolo só é a atribuição que fazemos nas variaveis
- usamos `!==` para falar de serem diferentes

### Conjunções logicas

- junta duas operacoes booleanas
- `&&`é o operador para AND
- `||`é o operador para OU
- se precisarmos imprimir um valor mas quisermos o oposto dele, é só colocar um `!`na frente
    - inverte a operação
    ```javascript
    console.log(!true)
    vai retornar falso
    
    console.log(numeroX >=18)
    ve se é maior de 18 e retorna verdadeiro

    console.log(!numeroX>=18)
    ve se é menor de 18
    ```
## Controle de fluxo e condicionais

-   o fluxo de execucao normal é uma linha depois da outra
- if/else
    - a estrutura é 
    ```

## Bibliotecas

- a palavra/comando `require` é usado para importar bibliotecas no JS

## DOM

- Document Object Model
- é a organização da estrutura da página que faz com que o JavaScript leia o HTML
- é uma árvore de objetos da página
    ![alt text](image-2.png)
- os elementos HTML são vistos como objetos
- possibilita o crud do html
