# Introdução a Lógica de Programação

- estruturar o raciocinio em comandos
  - comunicar com a máquina
- pseudocodigo
  - não é uma linguagem de prog
  - ta mais proximo da escrita humana
  - vantagem: não se preocupa com sintaxe ao aprender conceitos
- representações:
  - em fluxograma
  - em diagrama de Nassi/ Schneiderman
  - em portugol

## Algoritmo

- conjunto de passos
- passo a passo
  - instruções para a máquina fazer algo
  - a **sequencia** é importante - não assa o bolo antes de bater
- **variável**: espaço que guarda qualquer informação - um baú ou uma estante escaninho
  - colocando-se uma etiqueta em um espaço, ali apenas entra aquele objeto indicado na etiqueta
  - em uma variavel cabe um objeto, se quiser trocar o objeto, tem que tirar o primeiro
- **constante**: espaço que guarda uma informação que não varia
  - numero de dias da semana
- tipo de dado:
  - inteiro
  - decimal
  - string = texto
  - booleano
- exemplo:
  - ![image](https://github.com/user-attachments/assets/9fb45168-beac-4ed5-b772-c039c243a192)
- fazem cálculos, comparações, análises
- algoritmo de busca linear:
  - voce tem os elementos ordenados, busca por apenas um deles e o algoritmo vai olhando um por um pra ver se ele é o que voce ta buscando
  - em swift:
    - ![image](https://github.com/user-attachments/assets/6265c804-16cf-4d97-a668-eec95f6a4e58)
  - se o elemento buscado for, por exemplo, um número, e ele não estiver na sequencia dada, mas ele for menor que algum dos número que está ali, é possível quebrar o loop de busca:
    - ![image](https://github.com/user-attachments/assets/687b57c7-db12-43b7-866d-f319eea67c7f)
- binary search
  - se o numero de elementos for muito grande, buscamos a metade e eliminamos a parte que com certeza não inclui o que estamos procurando
  - ![image](https://github.com/user-attachments/assets/9c45418a-f94b-4960-9e2c-d8ebeaeb110d)
- anotação BigO
  - ajuda a comparar e ver qual é mais performático para aquilo

### Aplicando a lógica

- operadores
  - símbolos ao longo do codigo
    - +, -, *
  - comparação
    - igual, diferente
  - lógica
    - e, ou, se... então
  -  controle de fluxo do código
- repetição
  - condição que repete um trecho de código até que seja falsa
  - loops
  - for, while

## Estruturas de dados

## Paradigmas da programação

- como estrutura o codigo
- POO - programação orientada a objeto
  - é o mais comum
  - codigos reaproveitáveis, reutilizáveis, escaláveis
- estruturada
- funcional
- orientada a protocolos

### POO

- modelagem dos objetos (entidades envolvidas em um problema) e as interacoes entre elas
  - um objeto tem caracteristicas e funcoes e isso é abstraido no codigo
  - um usuario tb etc
- caractristicas da POO
  - reutilizacao de codigos - principio DRY das boas praticas
  - modularizacao - dividir em multiplas partes
  - integracao simples entre modulos
  - reaproveitamento de modulos em outros projetos
- elementos:
  - classes: abstracao de algum elemento do mundo real
    - pessoa, cachorro - de forma generica, que vao realizar acoes parecidas
    - importante para objetos que se repetem muito
  - objetos: uma representacao especifica e concreta da classe
    - gato é abstrato, qualquer um; manoa é uma gata específica
- elementos possuem:
  - atributos - caracteristicas
    - cor
  - metodos - acoes comuns
    - miar
    - sao representados como funcoes
- CRIANDO UMA CLASSE
  - colocar `class ClasseNova {}`
      - onde dentro das `{}`colocamos `atributo: característica` - sendo como a criacao de uma variavel
      - e onde, dentro de `{}` colocamos `nomeDoMetodo() { escopoDaFuncao }` onde o escopo pode ser um console.log
      - TODA CLASSE deve ter o metodo construtor em que, dentro de `()`ele vai dizer quais os atributos que um `novoObjeto` deve ter quando for criado
        - dentro das `{}` dele, colocamos `this.atributo = elemento do constructor que se refere a esse atributo` 
  - para criar um objeto `novoObjeto` a partir da `ClasseNova` a sintaxe é `const novoObjeto = new ClasseNova(infos requeridas pelo constructor)`
- principios
  - encapsulamento: restringe a alteracao dos atributos de uma classe para que nao possa ser alterado fora dela
  - heranca: quando uma nova classe vai herdar os mesmos atributos de uma classe anterior
    - cria a classe, adiciona a palavra extends e depois coloca a classe "mae"
    - dentro do constructor, coloca `super(atributoDaMae, atributo2DaMae)` etc para chamar ele, no lugar de `this.`

## Análise de requisitos

- analisar e tirar as informações importantes
- encontrar soluções

## Abordagens na programação

- TDD - Desenvolvimento baseado em testes
  - antes de escrever o código, escreve os testes, o que o código precisa passar pra estar correto
  
