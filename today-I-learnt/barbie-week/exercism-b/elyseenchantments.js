//TASK 1 - recieve a card from stack

//To pick a card, return the card at index position from the given stack.

let cards = [1,2,3,4,5,6,7,8,9,10]
let position = 2

function getItem(cards, position) {
  return cards[position];
}

//TASK 2 - EXCHANGE A CARD IN THE STACK

// Perform some sleight of hand and exchange the card at index position with the replacement card provided. Return the adjusted stack.

let replacementCard = 6

function setItem(cards, position, replacementCard) {
  cards.splice(position, 1, replacementCard);
  return cards
}

//TASK 3 - INSERT A CARD AT THE TOP OF THE STACK

//Make a card appear by inserting a new card at the top of the stack. Return the adjusted stack.

const newCard = 8

function insertItemAtTop(cards, newCard) {
  cards.push(newCard);
  return cards
}

//TASK 4 - REMOVE A CARD FROM STACK

//Make a card disappear by removing the card at the given position from the stack. Return the adjusted stack.

function removeItem(cards, position) {
    cards.splice(position, 1)
    return cards
  }

//TASK 5 - REMOVE THE TOP  CARD FROM THE STACK

//Make a card disappear by removing the card at the top of the stack. Return the adjusted stack.

function removeItemFromTop(cards) {
    cards.pop();
    return cards
}

//TASK 6 - INSERT A CARD AT THE BOTTOM OF THE STACK

//Make a card appear by inserting a new card at the bottom of the stack. Return the adjusted stack.

function insertItemAtBottom(cards, newCard) {
    cards.unshift(newCard);
    return cards;
}

//TASK 7 - REMOVE A CARD FROM THE BOTTOM OF THE STACK

//Make a card disappear by removing the card at the bottom of the stack. Return the adjusted stack.

function removeItemAtBottom(cards) {
    cards.shift();
    return cards;
}

//TASK 8 - CHECK THE SIZE OF THE STACK

//Check whether the size of the stack is equal to stackSize or not.

const stackSize = 4
function checkSizeOfStack(cards, stackSize) {
  if (cards.length == stackSize) {
    return true;
  } else {
    return false;
  }
}
