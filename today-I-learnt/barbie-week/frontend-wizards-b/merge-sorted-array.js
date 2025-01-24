// enunciado está 

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    // nums1.splice(m, nums1.length - m) --> dá certo também
    nums1.splice(m, n)
    nums1.push(...nums2)
    // nums1.sort() --> essa não deu certo quando os numeros resultantes eram negativos
    nums1.sort(function(a,b){ return a- b }) //essa deu certo pois pega dois elementos seguidos e compara e coloca o menor antes
};

// para testar os resultados, usar os exemplos que estão no enunciado
