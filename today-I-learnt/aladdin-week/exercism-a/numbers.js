// TASK 1
// A client contacts the freelancer to enquire about their rates. The freelancer explains that they work 8 hours a day. However, the freelancer knows only their hourly rates for the project. Help them estimate a day rate given an hourly rate.

//  * @param {number} ratePerHour
//  * @returns {number} the rate per day


export function dayRate(ratePerHour) {
    return ratePerHour * 8;
  }
  
// TASK 2

// Another day, a project manager offers the freelancer to work on a project with a fixed budget. Given the fixed budget and the freelancer's hourly rate, help them calculate the number of days they would work until the budget is exhausted. The result must be rounded down to the nearest whole number.

//    * @param {number} budget: the total budget
//    * @param {number} ratePerHour: the rate per hour
//    * @returns {number} the number of days


  export function daysInBudget(budget, ratePerHour) {
    return Math.floor((budget / ratePerHour) / 8);
  }
  
// TASK 3
// Often, the freelancer's clients hire them for projects spanning over multiple months. In these cases, the freelancer decides to offer a discount for every full month, and the remaining days are billed at day rate. Every month has 22 billable days. Help them estimate their cost for such projects, given an hourly rate, the number of days the project spans, and a monthly discount rate. The discount is always passed as a number, where 42% becomes 0.42. The result must be rounded up to the nearest whole number.

//    * @param {number} ratePerHour
//    * @param {number} numDays: number of days the project spans
//    * @param {number} discount: for example 20% written as 0.2
//    * @returns {number} the rounded up discounted rate

  
function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
    const dailyRate = ratePerHour * 8; // Assuming an 8-hour workday
    const billableDaysPerMonth = 22;
    
    const fullMonths = Math.floor(numDays / billableDaysPerMonth);
    const remainingDays = numDays % billableDaysPerMonth;

    // Calculate the cost for full months with discount
    const monthlyCostWithDiscount = fullMonths * billableDaysPerMonth * dailyRate * (1 - discount);

    // Calculate the cost for the remaining days
    const remainingCost = remainingDays * dailyRate;

    // Total cost
    const totalCost = Math.ceil(monthlyCostWithDiscount + remainingCost);

    return totalCost;
}
  
// --> Eu tentei resolver da forma abaixo:

    // export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
    //   let fullyMonths = Math.floor(numDays/22)
    //   let priceMinusDiscount = ratePerHour - (ratePerHour * discount)
    //   let notFullyMonths = 22 * (numDays % (numDays/22))
    //   return Math.ceil((priceMinusDiscount * fullyMonths * 8) + (ratePerHour * notFullyMonths *8));
    // }

//   ---> criando uma constante para a quantidade de meses completos, uma constante para o preço já sem desconto e uma para quantos dias são sem ser mes completo, pois aí cobraria valor sem desconto nesses dias, considerando 8h por dia de trabalho.
//     - dificuldade: náo deu nada certo, mas usei o chat GPT e percebi que eu estava indo no caminho certo.
//     - resolução: o chat gpt també criou outras constantes para fazer o cálculo, como está acima, porém meu raciocinio matematico não foi bom na hora de criá-las
//         - deveria ter primeiro contado o valor do dia sem desconto, depois calculado quantos meses fechados e enão aplicado o desconto por mes fechado; depois calculado quanto ficaria o valor nos dias restantes, e depois somado eses valores e restornado o resultado.