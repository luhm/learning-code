// Todas as respostas deviam ser exportadas no sistema do exercism, aqui mantive isso mas não era necessário

// Task 1

// Define the `EXPECTED_MINUTES_IN_OVEN` constant that represents how many minutes the lasagna should be in the oven. It must be exported. According to the cooking book, the expected oven time in minutes is `40`.

export const EXPECTED_MINUTES_IN_OVEN = 40

// Task 2

// Implement the `remainingMinutesInOven` function that takes the actual minutes the lasagna has been in the oven as a parameter and returns how many minutes the lasagna still has to remain in the oven, based on the expected oven time in minutes from the previous task.

//  * @param {number} actualMinutesInOven
//  * @returns {number} the number of minutes remaining

export function remainingMinutesInOven(actualMinutesInOven) {
  return EXPECTED_MINUTES_IN_OVEN - actualMinutesInOven
}

// --> _o que entendi:_ que era pra fazer uma função que pegava quantos minutos já foram de forno e diminui da quantidade total para saber quanto tempo falta.
    
// - dificuldade: náo soube criar a função sem já ter a variável/constante do tempo de forno que já havia passado

// - resolução: a Fê me ajudou a entender que eu crio uma função que tem um nome X (no caso é o **tempo que falta**) e dentro dos `()` eu coloco uma nova variável que é a que se refere ao **tempo que já foi**, depois é "só" chamar a função, substituindo essa nova variável pelo numero que já fiocu no forno



// Task 3

// Implement the `preparationTimeInMinutes` function that takes the number of layers you added to the lasagna as a parameter and returns how many minutes you spent preparing the lasagna, assuming each layer takes you 2 minutes to prepare.


//  * @param {number} numberOfLayers
//  * @returns {number} the total preparation time
//  */

export const PREPARATION_MINUTES_PER_LAYER = 2;


export function preparationTimeInMinutes(numberOfLayers) {
  return PREPARATION_MINUTES_PER_LAYER * numberOfLayers;
}


// Task 4

// Implement the totalTimeInMinutes function that takes two parameters: the numberOfLayers parameter is the number of layers you added to the lasagna, and the actualMinutesInOven parameter is the number of minutes the lasagna has been in the oven. The function should return how many minutes in total you've worked on cooking the lasagna, which is the sum of the preparation time in minutes, and the time in minutes the lasagna has spent in the oven at the moment.

//  * @param {number} numberOfLayers
//  * @param {number} actualMinutesInOven
//  * @returns {number} the total working time


export function totalTimeInMinutes(numberOfLayers, actualMinutesInOven) {
  return preparationTimeInMinutes(numberOfLayers) + actualMinutesInOven;
}

// --> *o que eu entendi:* que era pra fazer uma função que calculasse o tempo total, de preparo+forno (até o momento da contagem) (entendi certo)

// - dificuldade: ficava dando erro e eu não sabia porque, já que no calculo dava certo

// - resoluçao: a fê me mostrou que ao chamar uma função, mesmo que dentro de outra e mesmo que essa interna já tenha sido declarada antes, eu preciso dizer pro meu sistema qual o parâmetro dela, mesmo que seja o mesmo parametro de quando ela foi declarada a primeira vez


