console.log("Teste")

//POO - orient a obj

class Pessoa {  //cria uma classe Pessoa
    nome: string 
    idade: number
    private sobrenome: string

    constructor(nome:string, idade:number, sobrenome:string) {
        this.nome = nome
        this.idade = idade
        this.sobrenome = sobrenome
    }

    dormir() {  //isso aqui é um metodo, que é uma funcao da pessoa
        console.log("hora de dormir")
    }
} 

//criar uma nova = instanciar uma nova
const pessoa1 = new Pessoa("Luiza", 33, "Moretti")

console.log(pessoa1)

console.log(pessoa1.dormir()) //para  chamar o metodo ou a classe, colocamos assim com .

console.log(pessoa1.idade) // consigo chamar a idade e o nome, mas nao o sobrenome

