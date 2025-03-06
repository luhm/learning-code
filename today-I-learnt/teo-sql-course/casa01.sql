SELECT *
FROM tb_products

-- Quantos produtos temos da categoria 'artes'? 55

SELECT product_category_name
FROM tb_products
WHERE product_category_name = 'artes'

-- Quantos produtos tem mais de 5 litros? 19407

SELECT product_id
FROM tb_products
WHERE product_length_cm * product_height_cm * product_width_cm / 1000 > 5

-- Crie uma coluna nova que contenha a informação de volume em m3

SELECT product_id,
    product_category_name,
    product_length_cm * product_height_cm * product_width_cm / 1000000 as product_volume_m3
FROM tb_products

-- Quantos produtos de 'beleza_saude' com menos de 1 litro? 132

SELECT product_id,
    product_category_name,
    product_length_cm * product_height_cm * product_width_cm / 1000000 as product_volume_m3
FROM tb_products
WHERE product_category_name = 'beleza_saude'
    AND product_volume_m3 < 0.001
