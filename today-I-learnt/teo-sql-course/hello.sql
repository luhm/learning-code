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
    t1.product_category_name,
FROM tb_products as t1
WHERE (t1.product_category_name = 'bebes'
        and t1.product_photos_qty > 1)
or (t1.product_category_name = 'perfumaria'
        and t1.product_photos_qty > 3)


