# Módulo 2 e 3

- as IAs atuais trabalham com janelas de contexto, que é a quantidade de informações que ela aguenta que voce coloque nela
- às vezes ela não consegue voltar em informações passadas
- ela trabalha com um volume máximo de dados que ela aguenta lidar
    - isso vale para entrada e saída de dados
- tokens de entrada e tokens de saida são pedaços de palavras, cerca de 3/4 de uma palavra
    - algumas conseguem ter um volume maior de entrada, e menor de saída, varia de uma pra outra

## Engenharia de Prompt:
- dar contexto: situação ou cenario que ajuda a entender a situação
    - motivo
    - publico alvo
    - sentimento envolvido, caso seja um texto ou bilhete
- objetividade, evitar ambiguidade ou duplicidade
- pedir formatos específicos de resposta é interessante também
- dar exemplos ou referencias
- personificar: pedir que a ia atue como um papel específico
    - atue como um gerente que faça X e Y
- evita que a resposta seja genérica, ruim
- a IA vai aprendendo o que voce precisa, conforme voce pergunta
- prompt genérico - mais aberto e geral
- prompt estruturado - mais detalhado
- prompt refinado - é quando adicionamos informações mais detalhadas no prompt, inclusive editando ele após uma primeira pesquisa, para que fique mais específico
- Tipos de prompts
    - conversacionais: vamos conversando e pedindo coisas pra IA
    - one-shot: são pequenas ações que pedimos pra ela fazer, de uma vez
        - muito comum em automatizações
    - compostos: não apenas conversas, mas enriquecido com imagens, documentos, audios

## Chat GPT
- tem como configurar e personalizar, criando inclucive perfis
- podemos adicionar outras formas de conversa, como audio, imagem, lousa etc
    - chats arquivados, memória do proprio gpt
- tem como personalizar ele de forma a criar várias personas, onde voce diz pro chat GPT seu nome, o que voce faz da vida
    - inclusive voce pode pedir qur ele seja alguém especifico, seu chefe, um cliente etc, incluindo o tipo de atitude que quer que ele tenha e o foco dele
    - com isso ele ja consegue personalizar as respostas que vai te dar e ter mais acuracia nelas
    - pode adicionar outras infos mais detalhadas do seu negócio ou da sua situação
    - pode tirar as configs de audio, imagem etc
- tem robos específicos, na área de explorar GPT
    - eles pode ser de áreas específicas, por exemplo educação, produtividade, programação
- podemos criar um robo proprio nosso para automatizar coisas
    1. temos que criar o perfil do robo usando `### PERFIL DO ROBO` - dizemos o que ele é, quem ele é (empresario, etc)
    2. `### MISSÃO` - dizemos o que ele deve fazer, tarefas (criar posts de instagram que tenha caracteristicas X e Y)
    3. `### COMO FUNCIONA` - pode dividir em diferentes etapas, vai dizer como ele vai fazer/o que ele precisa para cumprir a missão
        - **etapa 1**: diferentes solicitações do usuario para entender a situação
        - **etapa 2**: o usuario preenche as informações solicitadas na etapa 1
        - **etapa 3**: um modelo de resposta
    4. `### MODELO DE RESPOSTA` - diz os possíveis modelos de resposta
    5. `### EXEMPLOS` - não é obrigatorio
- para criar imagens:
    1. o que quer ver
    2. estilo da imagem
    3. detalhes que precisa
    4. ambiente da imagem
    5. a qualidade
    - obs: a angulação muda tudo
        - **vista de cima:** organização, controle
        - **de baixo:** grandioso, forte
        - **de frente:** conversa, algo direto
        - **de lado:** algo mais discreto
        - **de perto:** detalhes, emoção


## Grok
- ele é melhor para pesquisa na internet
- ele é mais demorado um pouco

## Perplexity
- também bem boa para pesquisa na internet
- se assemelha ao GPT pago
- é mais rápido que outros

## Krea
- faz imagens e animações

## Notebook LLM
- criação de podcasts a partir de fontes diversas
- voce adiciona uma fonte e la cria um podcast sobre aquilo

## ElevenLabs
- sobre vozes, dublagens, trocar vozes
- de texto pra voz, de voz para texto

## Suno
- criação de musicas
- da para escolher o estilo de musica
- da para pedir pra ela criar a letra da musica ou colocar ja a letra e pedir pra musicar

