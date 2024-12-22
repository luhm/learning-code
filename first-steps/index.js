const fs = require("fs") //onde fs é o nome da biblioteca. FS é biblioteca do node.js

const nome = "Luiza" //cria a variável
console.log (nome) //exibe o que está naquela variável 

// -----PUXAR DO HTML-----

const textBox = document.querySelector("#textBox"); //onde textBox se refere à uma id do html, se for class, usar .

// -----IF/ELSE-----

const idade = 32 

if (idade < 18) {
    console.log("voce deve ir ao pediatra!")
} else if (idade >= 18 && idade < 60) {
    console.log("voce deve ir a um medico especialista regular!")
} else {
    console.log("voce deve ir a um geriatra!")
}

// -----SWITCH-----

const permissao = "professor" // "aluno" || "professor" || "admin" ----> QUANDO HÁ VÁRIAS POSSIBILIDADES PARA ESSA VARIÁVEL
switch(permissao){
    case "aluno":
        console.log("Voce tem acesso apenas às aulas.")
        break
    case "professor":
        console.log("Voce pode alterar as aulas e datas das avaliaões.")
        break
    case "admin":
        console.log("voce possui todas as permissões.")
        break
    default:
        console.log("Voce não possui nenhuma permissão")
}

// -----PROMPT-----
// ---PARA APARECER UMA CAIXINHA NA TELA DO USUÁRIO---

// const anoDeNascimento = prompt("Em que ano você nasceu?")
// console.log("o usuário nasceu em", anoDeNascimento)
// console.log("o usuário nasceu em ${anoDeNascimento}")

// -----FUNÇÕES-----
// ---SAO IMPORTANTE PARA EVITAR REPETICAO NO CODIGO---

function nomeDaFuncao(param1, param2) { //o nome é o que será evocado/chamado depois
    return param1 + param2 //return só é usado quando retorna algo pro codigo
}

    nomeDaFuncao(3, 5) //forma de evocar a funçao, dizendo que o parametro 1 é = 3 e o parametro 2 é = 5.


 