# Aula 3

## ORDER BY

- ORDENA A TABELA A PARTIR DAS INFOS DE UMA COLUNA
- funciona em colunas com palavras ou numeros

### DESC e ASC

- serve para ordenar um campo de forma decrescente ou ascendente
- pode adicionar mais de uma regra de desc e asc, que ajuda a desempatar os campos
```sql
select *
from name_table
order by nome_da_coluna desc, nome_de_outra_coluna asc
```

## DISTINCT

- colocar antes do nome da coluna em `select`
    - não seleciona todos, só os diferentes
    - não precisa colocar parenteses nem nada assim

## CASE WHEN

- é usado para atribuir uma condição
- vem dentro do select
- usa `when`...`else` da mesma forma que o `if` do JS
- usa `end` pra finalizar a condição
- aceita distinct também
- se ao fazer um `when` eu quiser agrupar algo sob uma só coluna, eu uso `then`
- podemos usar vários `when` dentro do mesmo `case``
    - podemos agrupar várias infos usando um formato completo
    ```sql
    case when alguma_coluna = 'algo'
        or alguma_coluna = 'alguma coisa'
        then 'coisas'
    ```
    - ou usando um formato mais resumido
    ```sql
    case when alguma_coluna in ('algo', 'alguma coisa')
        then 'coisas'
    ```
    - ou colocando uma palavra parecida
        - obs: precisa usar o % pois ele significa que ele vai ubscar tudo naquela coluna que contem aquela expressão que voce colocou
        - obs2: não precisa ser a palavra toda
    ```sql
    case when alguma_coluna like '%alg%' then 'coisas'
    ```

## COALESCE

- substitui o `case when null`
- substitui o null pela palavra que voce escolher
- voce pode colocar várias colunas(valores) na "fila" e ele vai sempre olhando se aquele é null
    - por exemplo, se tem várias colunas de telefone (celular, residencial, de trabalho, etc), voce pode  colocar todas elas no coalesce
    

- OBS: todos os exemplos estão no arquivo [hello.sql](learning-code/today-I-learnt/teo-sql-course/hello.sql).

