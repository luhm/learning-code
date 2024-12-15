const numeroA = 2

const numeroB = 3

console.log(numeroA+numeroB)

// function somar(numC, numD) { //assim ele retorna como se numC e numD fossem do tipo any
//     return numC + numD
// }

function somar(numC:number, numD:number){
    return numC+numD
}

console.log(somar(10, 20))

const nomeDoUsuario = prompt("Qual o seu nome?")

console.log(nomeDoUsuario?.toUpperCase())

//array types

const numeros: number[] = [1, 2, 3]

const nomes: string[] = ["1", "2", "3"] 

const idades: number[] = []

idades.push(33)
idades.push(10)
idades.push(12)
idades.push(20)
idades.push(19)


console.log(idades)

const menoresDeIdade = idades.filter((idade) => idade < 18)

console.log(menoresDeIdade)

//object type

//interface é um tipo customizavel
interface Person { //cria um modelo do que precisa existir para aquele objeto ser do tipo Person
    nome: string
    idade: number
    profissao: string
    peso?: number
}

