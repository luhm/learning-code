
// TASK 1 - GET THE FIRST LETTER OF A SENTENCE

//To determine the letters for the front door password, you need to respond with the first letter of the line of the poem, that the guard recites to you.

//To end up with a nice password, the members of the poetry club like to use acrostic poems. This means that the first letter of each sentence forms a word. Here is an example by one of their favorite writers Michael Lockwood.

//Stands so high
//Huge hooves too
//Impatiently waits for
//Reins and harness
//Eager to leave

// So when the guard recites Stands so high, you'll respond S, when the guard recites Huge hooves too, you'll respond H.

//Implement the function frontDoorResponse that takes a line of the poem as an argument and returns the first letter of that line.

let line1 = 'Stands so high'
let line2 = 'Huge hooves too'
let line3 = 'Impatiently waits for'
let line4 = 'Reins and harness'
let line5 = 'Eager to leave'

function frontDoorResponse(line) {
  return line[0]
}

frontDoorResponse(line1)

// TASK 2 - CAPITALIZE A WORD
//Now that you have all the correct letters, all you need to do to get the password for the front door is to correctly capitalize the word.

//Implement the function frontDoorPassword that accepts a string (the combined letters you found in task 1) and returns it correctly capitalized.

function frontDoorPassword(word) {
    word = word.toLowerCase() //eu poderia colocar let newWord = word.toLowerCase() que também daria certo
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
  
  frontDoorPassword('shire')

//TASK 3 - GET THE LAST LETTER OF A SENTENCE

// To determine letters for the back door password, you need to respond with the last letter of the line of the poem that the guard recites to you.

//The members of the poetry club are really clever. The poem mentioned before is also telestich, which means that the last letter of each sentence also forms a word:

//Stands so high
//Huge hooves too
//Impatiently waits for
//Reins and harness
//Eager to leave

//When the guard recites Stands so high, you'll respond h, when the guard recites Huge hooves too, you'll respond o.

//Note that sometimes the guard does stylistic pauses (in the form of whitespace) at the beginning or at the end of a line. You will need to ignore those pauses to derive the correct letter.

//Implement the function backDoorResponse that takes a line of the poem as an argument and returns the last letter of that line that is not a whitespace character.

function backDoorResponse(line) {
    line = line.trim()
    return line.slice(-1);
  }
  
  backDoorResponse(line1)

// TASK 4 - BE POLITE

//To enter the poetry club via the back door, you need to be extra polite. So to derive the password, this time you need to correctly capitalize the word and add ', please' at the end.

//Implement the function backDoorPassword that accepts a string (the combined letters you found in task 3) and returns the polite version of the capitalized password.

function backDoorPassword(word) {
    word.toLowerCase()
    return word.charAt(0).toUpperCase() + word.slice(1) + ', please';
  }
  
  backDoorPassword('horse')
