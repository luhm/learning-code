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

const anoDeNascimento = prompt("Em que ano você nasceu?")
// const idadeDoUsuario = 2024 - anoDeNascimento

console.log("o usuário nasceu em", anoDeNascimento)

// console.log("o usuário tem", idadeDoUsuario, "anos de idade")


