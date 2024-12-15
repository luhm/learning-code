console.log("Fetch API");

//usando then/catch

fetch("https://viacep.com.br/ws/01001000/json/").then((response) => {
        //console.log(response)
        response.json().then((dados) => console.log(dados))
    })
    .catch((erro) => {
        console.log(erro)
    })

//usando async/await

async function obterDadosDoCep() {
    const response = await fetch("https://viacep.com.br/ws/01001000/json/")
    const dados = await response.json()

    console.log(dados)
}

obterDadosDoCep();

