SELECT *
FROM tb_sellers


SELECT seller_id,
       seller_state
FROM tb_sellers

-- para consultar a categoria bebes com mais de 1 foto

SELECT product_id,
    product_photos_qty,
    product_category_name
FROM tb_products
WHERE product_category_name = 'bebes'
AND product_photos_qty > 1

-- com alias

SELECT t1.product_id,
    t1.product_photos_qty,
    t1.product_category_name
FROM tb_products as t1
WHERE (t1.product_category_name = 'bebes'
        and t1.product_photos_qty > 1)
or (t1.product_category_name = 'perfumaria'
        and t1.product_photos_qty > 3)

-- goup by
-- se colocar count ele conta quantos produtos tem na categoria

SELECT product_category_name,
        count(*),
        min(product_photos_qty),
        max(product_photos_qty),
        avg(product_photos_qty)

FROM tb_products
WHERE product_category_name is not NULL
GROUP BY product_category_name

-- trocar de tabela para sellers

select *,
        count(seller_state)

FROM tb_sellers
GROUP BY seller_state

-- subquery não é uma boa pratica
SELECT *
FROM (
    select *,
            count(seller_state) as qnt_sellers

    FROM tb_sellers
    GROUP BY seller_state
)
WHERE qnt_sellers >= 10

-- usando having

select *,
       count(seller_state) as qnt_sellers

FROM tb_sellers
GROUP BY seller_state
HAVING count(seller_state) > 10

-- lista de categorias distintas em ordem alfabetica

SELECT distinct product_category_name

from tb_products

order by product_category_name asc

-- case when when

SELECT distinct case when product_category_name is null then 'outros'
                    when product_category_name = 'alimentos' or product_category_name = 'alimentos_bebidas' then 'alimentos'
                    else product_category_name
                    end as 'categoria_agrupada'
from tb_products

order by product_category_name

-- case when when resumido

SELECT distinct case when product_category_name is null then 'outros'
                    when product_category_name in ('alimentos', 'alimentos_bebidas') then 'alimentos'
                    else product_category_name
                    end as 'categoria_agrupada'
from tb_products

order by product_category_name

-- case when contem

SELECT distinct case when product_category_name is null then 'outros'
                    when product_category_name like '%artig%' then 'artigos'

                    else product_category_name
                    end as 'categoria_agrupada'
from tb_products

order by product_category_name

-- com coalesce

SELECT distinct coalesce(product_category_name, 'outros') as 'cat_sem_null'

from tb_products

order by product_category_name

-- left join

select *
from tb_order_items as t1
left join tb_products as t2
on t1.product_id = t2.product_id

-- left join só com algumas colunas

select t1.*,
       t2.product_category_name

from tb_order_items as t1

left join tb_products as t2

on t1.product_id = t2.product_id

-- qual o produto mais caro que o seller já vendeu? considerando pedidos entregues

with tb_seller_product as (
    select seller_id,
        product_id,
        count(*) as qtde_produto,
        sum(price) as receita_produto

    from tb_orders as t1

    left join tb_order_items as t2
    on t1.order_id = t2.order_id

    where order_status = 'delivered'

    group by seller_id,
            product_id

    order by seller_id
),

tb_seller_max as (
    select seller_id,
            max(qtde_produto) as max_qtde

    from  tb_seller_product

    group by seller_id
)
select t1.*,
        t2.*

from tb_seller_max as t1

left join tb_seller_product as t2
on t1.seller_id = t2.seller_id
and t1.max_qtde = t2.qtde_produto -- o problema dessa query é que tem mais de um produto com o mesmo total máximo de venda. Alguns possuem o mesmo valor, inclusive

-- usando window function row_number, que enumera as linhas e, assim, a gente consegue enumerar por quantidade de produto, usando o partition by para particionar por cada seleer, fazendo com que a contagem resete a cada seller novo

with tb_seller_product as (
    select seller_id,
           product_id,
           count(*) as qtde_produto,
           sum(price) as receita_produto

    from tb_orders as t1

    left join tb_order_items as t2
    on t1.order_id = t2.order_id

    where order_status = 'delivered'

    group by seller_id,
            product_id

    order by seller_id
),

tb_seller_sort as (
    select *,
        row_number() over ( partition by seller_id
                            order by qtde_produto desc, receita_produto desc) as order_qtde --colocamos ainda o criterio de desempate como o com maior valor

    from tb_seller_product
)

select seller_id,
       product_id,
       qtde_produto
from tb_seller_sort

where order_qtde = 1


