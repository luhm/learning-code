# Aula 07

## Create Table

- serve para que a gente não precise ficar rodando aquela query toda hora
- a sintaxe é a seguir, sendo que dentro da query pode ter CTE, joins, etc etc
```sql
create table tb_nova as
{query}
```
- para não ficar tentando criar a tabela toda vez que rodar essa query, depois de ja criada, colocamos antes `drop table if exists {tb_nova};` e depois colocar o `create table`, que aí, caso a tabela não exista, ele cria.

