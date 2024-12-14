const fs = require("fs")

//exemplo 1 - Leitura de arquivo

console.log ("msg ANTES da funcao de ler o arquivo")

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

console.log("msg DEPOIS da funcao de ler o arquivo") //ele executou os dois console.log antes do callback, pois a do callback demora um pouco mais

//exemplo 2 - criacao de um timer

setTimeout(()=>{
    console.log("isso foi executado após 5segundos!")
}, 5*1000) //essa funcao tem um callback e um tempo para ele ser executado, que é em mmilissegundos, por isso multiplica os segundos por mil
