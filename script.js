// LIGHTNING EXERCISE 1
// Copy and paste the following code block into your file
let sentenceBeginning = "The symtoms of Covid-19 are"
const symtoms = ["cough", "fever", "exhaustion", "loss of sense of smell", "difficulty breathing"]
const mySymtoms = [];
// This loop will go through each symtom, concatenate it to our sentence, and push it into a new array of our own personal symtoms
for(let i = 0; i < symtoms.length; i++){
    sentenceBeginning += ` ${symtoms[i]}`
    mySymtoms.push(symtoms[i])
}
// Using the new variable keywords we just learned, troubleshoot this code so that it runs without errors

//LIGHTNING EXERCISE 2
// Copy and paste the following code block into your file

let taco;
function tacoTruck(shellType, toppings){
    taco = `A ${shellType} taco with ${toppings}`
}

// tacoTruck("soft", "beef, salsa, and sour cream")
// console.log(taco)

// Using the new variable keywords we just learned, refactor this code so that we can log what type of taco we ordered outside of the function without error messages

// Write a function that accepts two parameters, first and last name. The function should return a greeting to that person using their full name. Then log the greeting to the console outside the function

function greeting(firstName, lastName){
    const greetSentence = `Salutations ${firstName} ${lastName}!`
    return greetSentence
}

console.log(greeting("Bernie", "Sanders"))

