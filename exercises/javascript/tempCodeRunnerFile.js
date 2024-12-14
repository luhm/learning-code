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