
//TASK 1 - DETERMINE IF YOU'LL NEED A LICENSE

//Some kinds of vehicles require a drivers license to operate them. Assume only the kinds 'car' and 'truck' require a license, everything else can be operated without a license.

//Implement the needsLicense(kind) function that takes the kind of vehicle and returns a boolean indicating whether you need a license for that kind of vehicle.

function needsLicense(kind) {
    if (kind == 'car' || kind == 'truck'){
      return true
    } else {
      return false
    };
  }

//TASK 2 - CHOOSE BETWEEN TWO POTENTIAL VEHICLES TO BUY 

//You evaluate your options of available vehicles. You manage to narrow it down to two options but you need help making the final decision. For that implement the function chooseVehicle(option1, option2) that takes two vehicles as arguments and returns a decision that includes the option that comes first in dictionary order.

function chooseVehicle(option1, option2) {
    if (option1 < option2 == true){
      return option1 + ' is clearly the better choice.'
    } else {
      return option2 + ' is clearly the better choice.'
    };
  }

// TASK 3 - CALCULATE AN ESTIMATION FOR THE PRICE FOR A USED VEHICLE

// Now that you made your decision you want to make sure you get a fair price at the dealership. Since you are interested in buying a used vehicle, the price depends on how old the vehicle is. For a rough estimate, assume if the vehicle is less than 3 years old, it costs 80% of the original price it had when it was brand new. If it is more than 10 years old, it costs 50%. If the vehicle is at least 3 years old but not older than 10 years, it costs 70% of the original price.

//Implement the calculateResellPrice(originalPrice, age) function that applies this logic using if, else if and else (there are other ways if you want to practice). It takes the original price and the age of the vehicle as arguments and returns the estimated price in the dealership.

function calculateResellPrice(originalPrice, age) {
    if (age < 3) {
      return originalPrice * 0.8
    } else if (age > 10) {
      return originalPrice * 0.5
    } else {
      return originalPrice * 0.7
    };
  }
