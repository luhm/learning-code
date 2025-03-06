# Aula 1

- no VS Code, colocamos um arquivo `.sql` para poder rodar as queries.
    - adicionamos a extensão SQLite
- com os comandos `ctrl + shift + q` vinculamos esse arquivo a uma database
    - no mac, trocal control por `command`
- selecionamos a query e, com o botão direito, clicamos `run query` e ela vai abrir ao lado

## Banco de dados

- **campo** é a coluna
- **chave** é o que tem em comum entre duas tabelas para relaciona-las/ligá-las
- 
- **JOIN** é juntar, unir e usa uma chave para isso
- abaixo tem o código para abrir uma tabela, a partir de uma consulta
    - **SELECT** que é selecionar
    - `*` significa todos, é o seletor universal
    - não é obrigatório colocar espaço entre select e from
    - se voce colocar `table.` ele dá todos os campos daquela tabela
    - o limit significa a quantidade de linhas, e ele sempre é a ultima coisa que vem na query
        - ele traz as primeiras que ele acha, não necessariamente na ordem
```sql
select *
from tabl
limit 10
```
- para selecionar mais de uma coluna, colocar virgula (menos no final)
    - as colunas vão aparecer na ordem que voce colocar no select
- para filtrar por um valor específico de uma coluna, usamos where
```sql
select product
from tabl
where product = 'bola'
and product_qtt > 1
```
- se for pra filtrar um OU outro, colocamos parenteses
```sql
select product
from tabl
where (product = 'bola'
    or product = 'raquete')
and product_qtt > 1
```
- alias
    - é um apelido que voce pode dar para aquela tabela para que ela fique mais facil de manipular
        - auxilia saber de qual tabela está vindo aquele campo
    - sempre vem no `from`
    - assim, ao selecionar um campo dela, é só colocar `alias.campo` e ele vai selecionar
```sql
select t1.product
from tabl as t1
```
