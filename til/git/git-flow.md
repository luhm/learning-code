# Git e Gitflow

- git é uma ferramenta de controle de versões
  - consegue ir voltando no tempo se precisar
- programação em tronco (trunk) de árvore, com a main/master branch sendo o principal, e tendo vários outros galhos (branch)
  - bom para modern continuous software development

## Tags

- são rótulos
- normalmente identifica versões de lançamento
- após criadas, não mudam, mas da para deletar
  - git tag -d (nome da tag)
- tag leve - git tag (nome)
- tag anotada - possui metadados, informações
  - git tag -a (nome) -m “mensagem”
- desfazer merdas
  - localmente, não add e não commitado: git checkout -- (nome do arquivo)
  - localmente já add: git reset -hard (???)
  - git stash salva temporariamente as mudanças para voce poder mudar de branch ou consultar outra
    - git pop leva pra branch nova e apaga do stash
    - git apply leva também mas mantém no stash
   
## lista de códigos 


