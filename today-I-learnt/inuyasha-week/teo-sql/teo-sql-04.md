# Aula 4

- `pk`- primary key
    - é um identificador único dos itens de uma tabela
- `fk`- foreign key
    - é a pk de uma outra tabela que serve para conectar na tabela que voce está utilizando

## JOIN

- é usado quando precisamos de infos de diferentes tabelas para resolver nosso problema
    - pode usar as diversas funções `group by`, `where`, `count` e outras, em colunas de tabelas diferentes
- quando usamos `select ... from` estamos dizendo qual é a tabela de referencia, de partida
    - é para onde **trazemos** as informações
- sempre tem uma coluna que liga as duas tabelas, pois existe nas duas
- left join:
    - pega a tabela da esquerda, que começa no `from`
    - mantem todos os dados da esquerda e tenta encontrar as infos correspondentes na da direita
        - o que ele não acha fica nulo
        - as infos que estiverem na da direita e não na esquerda, é ignorado
- right join:
    - continua tendo a mesma tabela como referência
    - porém faz o movimento contrário: olha o que tem na tabela da direita e exclui da esquerda o que não corresponde
- inner join:
    - é o que tem nas duas
    - não possui nulo em nenhum lugar
- `cast` é uma função do SQL que converte um tipo de dado em outro tipo.


