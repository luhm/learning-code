# Comandos e terminal Git

## Forma mais facil de iniciar um novo repo

- criar ele no proprio github
- no terminal, escolher a pasta em que quer fazer o repo local
- dar um git clone e colocar o link ssh do repositorio (pegar no github)
- pronto, se já tiver algo local para ser commitado, é so seguir o caminho normal

![image](https://github.com/user-attachments/assets/18ec0c1b-d95c-41ce-8d5c-dccceb8ffb69)

## Outros comandos importantes

- git init - inicia e cria algo novo que voce já mandou fazer (usar após, por exemplo, touch)
- touch - criar (não é um comando git, mas pode ser usado para criar algo que será utilizado pelo git)
- ls - listar
- mkdir - make dir - criar diretório, ou seja, pasta nova
- cd - caminho
  - cd .. (volta)
  - cd (nome) (para ir pra pasta dentro da atual)
- git config - configurar git
  - usar junto com:
    - --global (o geral)
    - --local (a pasta em si)
- help - ve uma lista de informações sobre o que está sendo usado (geralmente, um só tracinho vem só com uma letra, como uma abreviação)
  - git -h **OU**
  - git --help
- commitar: enviar as alterações
  - **git pull** > **git add** > **git commit -m “mensagem”** > **git push**
  - pode acelerar usando **git commit -a -m “mensagem”** (já adiciona e commita)
  - para ajusta o ultimo commit sem fazer um novo: **git add .** > **git commit --amend -m “mensagem”**
  - **Boas práticas** em mensagens de commit: dar pistas do que foi mexido
- `git diff` é um comendo que mostra as diferneças entre o documento do servidor remoto e do servidor local, como uma extensão do `git status`
- `git log` apresenta o historico dos commits que foram feitos
- `git restore` volta ao arquivo como se ele não fosse modificado
- `git pull` puxa do remoto para o local e já modifica o seu arquivo
  - `git fetch` puxa as coisas diferentes do remoto, sem atualizar o local, aí voce consegue visualizar as mudanças antes de mergear
- Os comandos rebase e merge são muito parecidos
  - merge junta tudo, incluindo os commits
  - rebase copia um no outro mas traz apenas os comits que voce quiser, ou sej, fica sem histórico

