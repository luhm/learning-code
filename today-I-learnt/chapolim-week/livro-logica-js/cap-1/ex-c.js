let valorDoProduto = Number(prompt("Qual o valor do produto? (usar . no lugar de ."))

let valorDesconto = valorDoProduto - (valorDoProduto * 0.1)

let valorDividido = valorDoProduto/3

alert("O produto sai por " + valorDesconto + " reais a vista ou em 3x de " + valorDividido + " reais.")

//DEU CERTO. novamente tive dificuldade com montar a conta e estava fazendo o valorDoProduto multiplicado por 0.1 direto, esquecendo que tinha que tirar esse valor do valor normal para ser só o desconto. No final eu entendi o erro e deu certo
