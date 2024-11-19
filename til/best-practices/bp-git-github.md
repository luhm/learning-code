# Best Practices in Git and Github

## [Commits](https://gist.github.com/luismts/495d982e8c5b1a0ced4a57cf3d93cf60)

- colocar uma mensagem de commit clara do que foi feito
-   não usar verbos flexionados (usar "fix bugs" e não "fixed bugs")
- usar branches e uma workflow específica
  - gitflow é uma workflow interessante de usar
- existem palavras que representam o tipo de commit que está sendo feito (aqui eu segui a [angular convention](https://www.conventionalcommits.org/en/v1.0.0/), indicada pelo site [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)):
  - fix - um juste de bug/codigo
  - feat - uma nova feature no código
  - chore - é uma tarefa que foi completada
  - style - mudança nos estilos/design, não afetam o significado do código, o que ele diz/faz
  - test - adiciona testes ou arruma os existentes

### descrições

- pode ou não usar tópicos
- responder perguntas importantes como "What was the motivation for the change?", "How does it differ from the previous implementation?"
