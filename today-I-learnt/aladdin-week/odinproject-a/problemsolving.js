// subtask 1

let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));

// no JS dá pra usar prompt
//usou parseInt para pegar o número escolhido e não o que está escrito no prompt



// subtask 2

//criar um loop com for

// i é o valor inicial, ele vai até o valor que foi atribuído pelo prompt do usuário e printa (com console log) o valor novo de i



// subtask 3

// usa um if para quando o número for multiplo de 3 e muda o console log
// colocar esse if dentro da função - eu tinha essa dúvida
// se o resto da divisão do numero por 3 for 0, quer dizer que ele é multiplo de 3 e aí ele vai escrever Fizz



// subtask 4

// usa outro if para quando o numero for multiplo de 5
// colocar esse if dentro da função, após o else - eu tinha essa dúvida

for (let i = 1; i <= answer; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz")
    } else if (i % 3 === 0) {
        console.log("Fizz")
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i)
    }
}



