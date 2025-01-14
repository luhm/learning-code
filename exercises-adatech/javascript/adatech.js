const readlineSync = require("readline-sync")

console.log("Olá!")

var nomeDaPessoa = "Luhm"; //camelCase e variável string (texto)
var idade = 33; //variavel int que é interpretada como number
var altura = 1.57 //também é um number
var estudando = true //booleana

// se criar uma variável sem atribuir valor a ela, o tipo é undefined

console.log(nomeDaPessoa)
console.log(idade)
console.log(altura)
console.log(estudando)

// para imprimir mais de uma coisa, é possível usar só um console.log e separar as variáveis com virgula

console.log(idade, typeof idade, altura, typeof altura)

var curso = "front-end", materia = "JavaScript" //pode criar mais de uma variável na mesma linha

console.log(curso)
console.log(materia)

// usando let e const

let notaDoAluno = 10
const mediaFinal = 8

notaDoAluno = 7 //isso aqui substitui a nota anterior
//mediaFinal = 6 // isso aqui dá erro, não pode ser feito

console.log(notaDoAluno, mediaFinal)

// operadores

let notaDoAluno1 = 10
let notaDoAluno2 = 6
const mediaFinalDoAluno = (notaDoAluno1 + notaDoAluno2)/2

console.log(mediaFinalDoAluno)
console.log("média final do aluno =", mediaFinalDoAluno) //para que no texto final apareça "média final do aluno = 8" a gente declara um texto e depois a variável, na mesma linha, separando por vírgulas

//usando a biblioteca Math

let numeroX = 16
const raizQuadrada = Math.sqrt(numeroX)

console.log("raiz quadrada de", numeroX, "=", raizQuadrada) //aqui unindo texto e essas variáveis anteriores

// usando prompt - deu certinho, só comentei pra não ficar aparecendo a caixa toda toda kkkkk

//const anoDeNascimento = prompt("Em que ano você nasceu?")
// const idadeDoUsuario = 2024 - anoDeNascimento

//console.log("o usuário nasceu em", anoDeNascimento)

// console.log("o usuário tem", idadeDoUsuario, "anos de idade")

//const anoDeNascimento = prompt.question("Em que ano você nasceu?") //não funcionou

//console.log("o usuário nasceu em", anoDeNascimento)

//coersão de tipos

console.log(2+3+4+"5") //ele soma os primeiros até que nao da mais para somar e aí ele vira texto

console.log("5"+2+3+4) //como o primeiro ja é string, ele tranforma todos os outros

console.log(5-2-"2") //ele retorna 1, transformando tudo em numero

console.log(5-2-2+"5") //ele retorna 15

//booleanos

let numberA = 10
let numberB = 15

console.log(numberA === numberB) //ele retorna falso - usar sempre ===

console.log(numberA !== numberB) //ele retorna true - compara valor e tipo

console.log(numberA >= 12 && numberB >=12)

console.log(numberA >= 12 || numberB >=12)

//condicionais e controle de fluxo

// const idadePessoa1 = Number(prompt("Qual a sua idade?"))

//const ehMaiorDeIdade = idade >= 18

const idade = 15

//if (idade >= 18) {
//    console.log("voce é maior de idade!")
//} else {
//    console.log("voce é menor de idade...")
//}

if (idade < 18) {
    console.log("voce deve ir ao pediatra!")
} else if (idade >= 18 && idade < 60) {
    console.log("voce deve ir a um medico especialista regular!")
} else {
    console.log("voce deve ir a um geriatra!")
}

// switch...case

const permissao = "professor" // "aluno" || "professor" || "admin"

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

