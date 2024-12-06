# Física dos computadores

- o principal material é o silício
- material condutor (sinal eletrico, como cobre)
- material isolante (da corrente eletrica, borracha)
- semicondutor (silício, dependendo de como ele é manipulado)

## Silício

- muito abundante
- normalmente oxido de silicio
- átomos do silício
  - ligações covalentes com outros átomos de silício
  - após purificado, é colocada uma quantidade controlada de impureza
  - faz-se cristais n ou p (neg ou pos)
- CMOS
- MOSFET
- tecnologia espacial não usa silício
  - mais dificil de dissipar calor
  - ligas de metais

## Lógica

- booleana
- valores verdadeiros ou falsos
- operações
  - e - and
    - ligação entre duas expressões
    - a primeira verdade e a segunda também
  - não - not
    - inverte o valor lógico
  - ou - or
    - uma das coisas deve ser verdade
    - as duas podem ser verdade, mas só uma basta
  - ou exclusivo - or... or - xor
    - não vale se as duas forem verdadeiras
- 1 é verdadeiro, 0 é falso

![image](https://github.com/user-attachments/assets/36652fb8-057d-48fc-a8d9-7aa593a6b9e7)

### na computação

- uso de transistores
  - com canal positivo ou com canal neg
  - canal pos recebe com menor tensão
  - canal neg conduz com tensão maior
- alta tensão 1
- baixa tensão 0
- inversor:
  - os componentes eletricos de acordo com a logica booleana e o recebimento de energia/tensão
  - se ligar em série, temos and
  - se ligar em paralelo, temos nand
  - nand = not and
  - a bolinha simboliza o inversor
  - ![image](https://github.com/user-attachments/assets/618864e8-0cd5-4bbf-8ded-3a47a71044b5)
  - or e nor
  - ![image](https://github.com/user-attachments/assets/51943aa4-c906-4c51-9809-ecd971d8a8c8)
  - xor
  - ![image](https://github.com/user-attachments/assets/7425c6ff-d6b7-434d-9d56-73eb60554a8c)



