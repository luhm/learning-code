
// TASK 1 - CHECK IF THE 'FAST ATTACK' ACTION IS POSSIBLE

// Implement a function named canExecuteFastAttack that takes a boolean value which indicates if the knight is awake. This function returns true if the 'Fast Attack' action is available based on the state of the character. Otherwise, returns false

function canExecuteFastAttack(knightIsAwake) {
    if (knightIsAwake == true){
      return false
    } else {
      return true
    };
  }

// TASK 2 - CHECK IF THE 'SPY' ACTION IS POSSIBLE

// Implement a function named canSpy that takes three boolean values, indicating if the knight, archer and the prisoner, respectively, are awake. The function returns true if the 'Spy' action is available based on the state of the characters. Otherwise, returns false

function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {
    if (knightIsAwake == true || archerIsAwake == true || prisonerIsAwake == true){
      return true
    } else {
      return false
    };
  }

// TASK 3 - CHECK IF THE 'SIGNAL PRISONER' ACTION IS POSSIBLE

// Implement a function named canSignalPrisoner that takes two boolean values, indicating if the archer and the prisoner, respectively, are awake. The function returns true if the 'Signal Prisoner' action is available based on the state of the characters. Otherwise, returns false

function canSignalPrisoner(archerIsAwake, prisonerIsAwake) {
    if (archerIsAwake == false && prisonerIsAwake == true) {
      return true
    } else {
      return false
    }
  }

//TASK 4 - CHECK IF THE 'FREE PRISONER' ACTION IS POSSIBLE

// Implement a function named canFreePrisoner that takes four boolean values. The first three parameters indicate if the knight, archer and the prisoner, respectively, are awake. The last parameter indicates if Annalyn's pet dog is present. The function returns true if the 'Free Prisoner' action is available based on the state of the characters and Annalyn's pet dog presence. Otherwise, it returns false

function canFreePrisoner(
knightIsAwake,
archerIsAwake,
prisonerIsAwake,
petDogIsPresent,) {
    if (archerIsAwake == false && petDogIsPresent == true){
        return true
    } else if (archerIsAwake == false && prisonerIsAwake == true && knightIsAwake == false) {
        return true
    } else {
        return false
    };
}
