const fs = require("fs")

//essa é uma funcao assincrona
//fs.readFile("./adatechtest.txt")

// essa é a mesma funcao, com uma funcao callback nela
fs.readFile("exercises/javascript/adatechtest.txt", (erro, conteudoDoArquivo) => {
    if (erro) {
        console.log("msg de erro:", erro)
    } else {
        console.log(String(conteudoDoArquivo)) //ele retorna por padrao em buffer, uma forma de ler o arquivo, entao é melhor indicar que retorne em string
    }
})
