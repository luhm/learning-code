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


