# npm x yarn x pnpm

## npm x yarn
- yarn e npm fazem a mesma coisa, basicamente
    - O Yarn é um projeto opensource que nasceu dentro do facebook e devido a alguma frustração por a NPM iterar lentamente e estar a ficar lenta. Isto veio a ser corrigido, talvez por influência de concurrência Yarn.
    - npm é o padrão do node.js e é open source
- **determinismo**
    - No ecossistema Node, dependências são colocadas dentro de um diretório chamado node_modules, o cliente npm instala dependências no diretório node_modules de forma **não determinística**
        - baseado na ordem em que as dependências são instaladas, a estrutura de um diretório node_modules pode ser diferente de uma pessoa para outra
    - yarn utiliza um algoritmo de instalação que é determinístico e lockfiles bloqueiam as dependências instaladas em uma versão específica, garantindo que cada instalação resulte na mesma estrutura de arquivos em node_modules em todas as máquinas
- **paralelização**
    - yarn é capaz de paralelizar operações e fica mais rápido

## pnpm

- surgiu pra resolver os problemas do npm frente ao yarn
- é mais rápido e ocupa menos espaço em disco
- curva de aprendizado mais íngrime e demorada, mas mais fácil a longo prazo

## estruturas de pastas

- npm e yarn criam um diretório node_modules na raiz do projeto para armazenar as dependências instaladas, usando o arquivo packages.json
- pnpm armazena todos os pacotes em um único local no sistema e os vincula simbolicamente para cada projeto, economizando espaço em disco

