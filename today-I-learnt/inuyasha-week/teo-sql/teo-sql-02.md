# Aula 02

- max - quando voce quer o que tem o maior valor naquela coluna
    - por exemplo, uma coluna de peso e voce quer o que tem maior peso
- min - menor valor
- avg - average, média
- se quiser saber só de uma categoria, pode adicionar ao final `where` + nome da coluna + tipo específico que voce quer
    ```sql
    select max(nome_coluna) as (nova_coluna)
           min(nome_coluna) as (nova_coluna_2)
           avg(nome_coluna) as (avg_nova_coluna)
    from tabela_x
    where coluna_de_nome = "nome que eu quero"
    ```
- `where`é uma forma de pré-agregação

## GROUP BY

- serve para agregar informações
    - ao invés de colocar só uma categoria no where, voce coloca essa categoria inteira no select, e usa group by no lugar do where para mostrar a infor de media, min, max para todas as categorias que estão sob a `coluna_de_nome`
    ```sql
    select coluna_de_nome,
           max(nome_coluna) as (nova_coluna),
           min(nome_coluna) as (nova_coluna_2),
           avg(nome_coluna) as (avg_nova_coluna)
    from tabela_x
    group by coluna_de_nome
    ```
- se ainda quiser usar `where`, ele vem **antes** do `group by`
- exemplo prático no arquivo [hello.sql](/Users/luhmoretti/Documents/projetos/learning-code/today-I-learnt/teo-sql-course/hello.sql)
- quando usamos `where`com vários detalhes, podemos usar da forma abaixo:
```sql
select coluna_de_estado,
        max(nome_coluna) as nova_coluna,
        min(nome_coluna) as nova_coluna_2,
        avg(nome_coluna) as avg_nova_coluna
from tabela_x
where coluna_de_estado IN ('SP', 'RJ', 'DF')
group by coluna_de_nome
```
- o `where`não funciona em cima de tabelas que foram criadas pelo `as`, como a `nova_coluna` acima
    - ele funciona apenas para operações aritméticas em colunas da tabela acionada, sem outras operações em cima dela

## HAVING

- é uma forma de agregação (pós agregação)
- só se usa quando ta usando o group by
- subquery (não é muito bom de usar): é possível fazer uma query em cima de outra query
    - colocando a query mais antiga dentro de parenteses no `from` da query nova.
    - para substituir a subquery, podemos usar `having`
    ```sql
    select coluna_de_estado,
            max(nome_coluna) as nova_coluna,
            min(nome_coluna) as nova_coluna_2,
            avg(nome_coluna) as avg_nova_coluna
    from tabela_x
    where coluna_de_estado IN ('SP', 'RJ', 'DF')
    group by coluna_de_nome
    having nova_coluna > 10
    ```



