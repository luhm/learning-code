# SQL

## Bancos relacionais

- usam SQL e possuem várias tabelas
- entidade é a tabela/assunto dela
    - por exemplo, ao vender livros, voce pode ter 3 entidades que se relacionam entre si: livros, autores, vendas
        - não precisa adicionar toda vez que vender um livro X, escrever o título dele, o autor e a quantidade vendida - pode simplesmente usar uma FK que já conecta essas informações
- relacionando informações
    - atraves das chaves FK e PK
    - ajuda a evitar erros e duplicidades
- **vantagens**
    - garantia de integridade
    - ferramentas mais maduras
    - evita repetição
    - pesquisas complexas com SQL
    - suporte a transações seguras
- **Desvantagens**
    - estrutura rígida e pouco adaptável
    - escalabilidade limitada
    - pode ficar lento com muitas dados
    - requer conhecimento técnico para criar e manter

## Bancos não-relacionais

- dados que mudam com frequencia e que crescem rapidamente
    - formatos diferentes
- mongoDB - cada arquivo é um JSON
- **vantagens**
    - flexível e fragmentação (documentos independentes)
    - alta performance com alto volume
    - escalabilidade horizontal
    - tolerancia a falhas
- **desvantagens**
    - consistencia eventual
    - sincronização nem sempre imediata
    - transações complexas limitadas 
    - nem sempre tem suporte a transações seguras
    - se joins nativos (atrapalha pesquisas completas)
    - menor maturidade das ferramentas

## usando SQL

- primeiro comando é o `CREATE TABLE` com o nome da tabela, o nome de cada coluna e seu tipo, separados por vírgulas
    - as tabelas são separadas por ponto e vírgula
    ```sql
    CREATE TABLE autores (
        id_autor INT PRIMARY KEY,
        nome_autor VARCHAR(100)
    )
    ```
    - quando a tabela tiver uma foreign key, colocamos no final
    ```sql
    CREATE TABLE autores (
        id_autor INT PRIMARY KEY,
        nome_autor VARCHAR(100),
        nome_livro VARCHAR(100),
        FOREIGN KEY (nome_livro) REFERENCES livros(nome_livro)
    )
    ```
- para adicionar dados nas tabelas, usamos `INSERT INTO`
    ```sql
    INSERT INTO autores(id_autor, nome_autor, nome_livro)
    VALUES
    (1, 'Machado de Assis', 'Dom Casmurro')
    (2, 'Clarice Lispector', 'A Culpa é das Estrelas')
    (3, 'George Orwell', '1984')
    ```

### Consultando o banco de dados

- é possível fazer mais de um `SELECT algo AS codinome` usando o comando `UNION`
    - se ambos os selects forem com o mesmo codinome, as informações aparecem na mesma coluna
        - é tipo um `JOIN`
- funções de agregação:
    - `sum`, `count`, `AVG`, `MAX`, `MIN`
    - são usadas ainda no select
- funções de agrupamento:
    - a principal é a `GROUP BY`
        - pegando como exemplo a tabela autores acima, nós podemos pedir pra ele contar quantos livros tem de cada autor e agrupar por autor
        ```sql
        SELECT nome_autor, COUNT(nome_livros)
        FROM autores
        GROUP BY nome_autor
        ```
- filtros:
    - `WHERE` - antes do GROUP BY
    - `HAVING` - depois do GROUP BY
- ordenação:
    - `ORDER BY`
- junção - `JOIN`
    - unindo tabelas para fazer consultas
    - `INNER JOIN` - traz o que está contido em ambas as tabelas
    - `LEFT JOIN` - traz tudo da tabela da esquerda + o que também existe na tabela da direita
    - `RIGHT JOIN` - traz os elementos da segunda tabela (da direita) que tenham correspondencia com a sua tabela principal (da esquerda)

