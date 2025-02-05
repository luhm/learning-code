let apartamento = Number(prompt("Qual o número do seu apartamento?"))

function pegarVizinhoMenor(apartamento) {
  return apartamento - 1
}

function pegarVizinhoMaior(apartamento) {
  return apartamento + 1
}

let viz1 = pegarVizinhoMenor(apartamento)
let viz2 = pegarVizinhoMaior(apartamento)

alert("Seus vizinhos mais próximos são: " + viz1 + " e " + viz2)
