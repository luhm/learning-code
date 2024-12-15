// document.getElementsByTagName("h1") //pega todos os h1

// const todosOsH1s = document.getElementsByTagName("h1") //transformei em classe para usar console log

// console.log(todosOsH1s)
 
// evento no botao


const botaoMais = document.querySelector(".botao-aumentar")
const botaoMenos = document.querySelector(".botao-diminuir")

const valorDoContador = document.querySelector(".valor-do-contador")

botaoMais.addEventListener("click", function(event) {
const valorAtual = Number(valorDoContador.textContent)

valorDoContador.textContent = String(valorAtual + 1)
})

botaoMenos.addEventListener("click", function(event) {
    const valorAtual = Number(valorDoContador.textContent)
    
    valorDoContador.textContent = String(valorAtual - 1)
    })
    
    


