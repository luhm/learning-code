# Aula 05

## SUBQUERY

- é basicamente uma query dentro da outra
- quando o que voce quer como resultado é já uma query completa (ou o resultado dela, que é já uma tabela)
- é possível fazer um join com uma outra query, pois o resultado dela é já uma tabela

## WITH

- ele vem primeiro na query, antes do select
- em seguida vem o nome de uma tabela que voce quer fazer
    - e depois vem a subquery completa
- assim voce está nomeando a sua tabela temporária criada por essa query
- depois disso voce pode começar a nova query com select, e usar essa tabela que voce nomeou como uma tabela normal do banco
- pode usar um with e ir colocando várias tabelas novas (subqueries)



