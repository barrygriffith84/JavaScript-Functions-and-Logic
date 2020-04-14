// LIGHTNING EXERCISE 1
// Copy and paste the following code block into your file
let sentenceBeginning = "The symtoms of Covid-19 are"
const symtoms = ["cough", "fever", "exhaustion", "loss of sense of smell", "difficulty breathing"]
const mySymtoms = [];
// This loop will go through each symtom, concatenate it to our sentence, and push it into a new array of our own personal symtoms
for (let i = 0; i < symtoms.length; i++) {
    sentenceBeginning += ` ${symtoms[i]}`
    mySymtoms.push(symtoms[i])
}
// Using the new variable keywords we just learned, troubleshoot this code so that it runs without errors

//LIGHTNING EXERCISE 2
// Copy and paste the following code block into your file

let taco;
function tacoTruck(shellType, toppings) {
    taco = `A ${shellType} taco with ${toppings}`
}

// tacoTruck("soft", "beef, salsa, and sour cream")
// console.log(taco)

// Using the new variable keywords we just learned, refactor this code so that we can log what type of taco we ordered outside of the function without error messages

// Write a function that accepts two parameters, first and last name. The function should return a greeting to that person using their full name. Then log the greeting to the console outside the function

function greeting(firstName, lastName) {
    const greetSentence = `Salutations ${firstName} ${lastName}!`
    return greetSentence
}

console.log(greeting("Bernie", "Sanders"))


// Practice: ChickenMonkey

// Write a program that prints the numbers from 1 to 100. But for multiples of five (5, 10, 15, etc.) print "Chicken" instead of the number and for the multiples of seven (7, 14, 21, etc.) print "Monkey". For numbers which are multiples of both five and seven print "ChickenMonkey".

// To determine if a number can be evenly divided by 5 or 7, use the JavaScript remainder operator.

// You can start with this simpler version that outputs even numbers to the console and ignores odd numbers. You need to refactor this code to meet the requirements above.

// for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {
//     // Divide the current number by 2, and check if the remainder is 0
//     if (currentNumber % 2 === 0) {
//         console.log(currentNumber) // Only 2, 4, 6 will appear
//     }
// }

for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {
    if (currentNumber % 5 === 0 && currentNumber % 7 === 0) {
        console.log("ChickenMonkey")
    } else if (currentNumber % 5 === 0) {
        console.log("Chicken")
    } else if (currentNumber % 7 === 0) {
        console.log("Monkey")
    } else {
        console.log(currentNumber)
    }
}


// Practice: Take a Number - Battle of the Bands

// A local nightclub is having a Battle of the Bands night in a few months. They expect many bands to sign up because the grand prize is $20,000. To make things easier on the nightclub management, they want each band to be assigned a number so that they can easily keep track of the order in which the bands will perform.

// Your job is to write a function that accepts any band name as an argument. The function will increment a global variable by one each time it is invoked, and return that number, and the band name concatenated together.

// let bandNumber = 1

// const takeNumber = function () {
//     /*
//         Write your awesome code here. See comments
//         below for what should be returned.
//     */
// }

// const scum = takeNumber("Galactic Scum")
// console.log(scum)  // This should print "1. Galactic Scum" in the console

// const under = takeNumber("Underdogs")
// console.log(under)  // This should print "2. Underdogs" in the console

let bandNumber = 1;

const takeNumber = function (bandName) {
    const bandOrder = `${bandNumber}: ${bandName}`;
    bandNumber++;
    return bandOrder;
}

const scum = takeNumber("Galactic Scum")
const under = takeNumber("Underdogs")

console.log(scum)
console.log(under)


// UI/UX Challenge

// This is an optional challenge once you meet MVP. Make a new GitHub branch for this challenge.

// Nightclub management wants to use this app at the front door during the event. Incorporate the logic you have written and add an HTML document and apply CSS to make a mobile version of Battle of the Bands.


// Practice: Cookout

// Copy the following objects into your JavaScript file.

const hamburger = {
    name: 'Hamburger',
    type: 'beef',
    cooked: false,
}
const zucchini = {
    name: 'Zucchini',
    type: 'vegetable',
    cooked: false,
}
const chickenBreast = {
    name: 'Chicken Breast',
    type: 'chicken',
    cooked: false,
}
const corn = {
    name: 'Corn',
    type: 'vegetable',
    cooked: false,
}
const steak = {
    name: 'Steak',
    type: 'beef',
    cooked: false,
}

// // An array that is grouping the objects together.
const foods = [hamburger, zucchini, chickenBreast, corn, steak];

// // An empty array that will store the objects after the `grill()` function cooks the food.
const cookedFood = [];

// This exercise does not require you to alter this function. But read it. See if you can follow what it takes in, executes, and returns.

// The grill() function. Copy this into your JavaScript as well.

function grill(currentObject) {
    // Modify the food so that it is cooked
    currentObject.cooked = true;

    // Put the cooked food into the appropriate array
    cookedFood.push(currentObject);
};

// Your task is to iterate over the array of foods and invoke the function for each item so that the cookedFood array contains all of the items after they are cooked.
for (let i = 0; i < foods.length; i++) {
    grill(foods[i])
}

console.log(cookedFood)

// Practice: Overly Excited

// For this exercise, you need to create a single JavaScript function named addExcitement that will use console.log() to print out a sentence to the browser console.

//     If you haven't done so yet, create the workspace/javascript/overly-excited directory structure in your home directory. Open your terminal and enter in the following command.

//     mkdir -p ~/workspace/javascript/overly-excited

//     Now that you have created the directory, you want to change to that directory so that you can add files to it.

//     cd ~/workspace/javascript/overly-excited

//     Create an index.html file in this directory with the touch command.

//     Create an overly-excited.js file in this directory with the touch command.

//     Copy the following code and paste it into the index.html file. Notice that the overly-excited.js file is properly linked so that when you load this HTML file in a web browser, the logic in that file will be executed.

//     <!DOCTYPE html>
//     <html>
//     <head>
//         <title>Overly Excited</title>
//     </head>
//     <body>

//         <script src="overly-excited.js"></script>
//     </body>
//     </html>

//     Open the index.html file in your web browser.

//     At this point, you will simply see a blank web page because you have no content in the HTML file. Open your developer tools using the Option+Command+I keyboard shortcut.

//     At the top of the developer tools panel, you will see the word Console. Click on that word. The console.log() statement will output any message into this panel in your developer tools. You can try it out immediately by clicking in the Console panel, and typing console.log("Hello, world!"), and then pressing your return key.

// function addExcitement(sentenceInput) {
//     console.log(sentenceInput)
// }


// addExcitement("I am so excited and I just can't hide it");

// Practice: Stacking Words

//     The learning objects of this exercise is to use iteration and string concatenation

// Create an addExcitement function that should console.log() rows of words. It should take an array containing the words of a sentence and output them in the developer console.

//     Example output:

//     The

//     The walrus

//     The walrus danced

//     The walrus danced through

//     The walrus danced through the

//     The walrus danced through the trees

//     The walrus danced through the trees in

//     The walrus danced through the trees in the

//     The walrus danced through the trees in the light

//     The walrus danced through the trees in the light of

//     The walrus danced through the trees in the light of the

//     The walrus danced through the trees in the light of the moon ...

// Paste the following code into overly-excited.js

// // Create an array that contains the words in the sentence
// let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

// /*
//     The addExcitement function should be an impure function, and accept
//     the array as the sole argument. It should iterate over the array
//     and output the words to the browser console.
// */
// function addExcitement (theWordArray) {

//     // Each time the for loop executes, you're going to add one more word to this string
//     let buildMeUp = ""

//     for (let i = 0; i < theWordArray.length; i++) {
//         // Concatenate the new word onto buildMeUp

//         // Print buildMeUp to the console
//     }

// }

// // Invoke the function and pass in the array
// addExcitement(sentence)

// let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

// function addExcitement (theWordArray) {
//     let buildMeUp = ""

//     for(let i = 0; i < theWordArray.length; i++) {
//         buildMeUp += `${theWordArray[i]} `
//         console.log(buildMeUp)
//     }
// }

// addExcitement(sentence);


// Practice: Some words are more exciting than others

//     The learning objective of this exercise is to use the JavaScript if statement inside a loop to do one operation when a certain conditions is true, and a different operation if that condition is false.

// Add logic to addExcitement that places an exclamation point (!) after every third word. Read the following English statement and write the equivalent in JavaSript code to make it work.

// If the current value of the counter variable can be evenly divided by 3 (using the JavaScript remainder operator) add a single exclamation point (!) to the current word in the array.

// let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

// function addExcitement (theWordArray) {
//     let buildMeUp = ""

//         for(let i = 0; i < theWordArray.length; i++) {

//             if((i + 1) % 3 === 0 ){
//                 buildMeUp += `${theWordArray[i]}! `  
//             } else(
//                 buildMeUp += `${theWordArray[i]} `
//             )
//             console.log(buildMeUp)
//         }

//     }

//     addExcitement(sentence);



// addExcitement(sentence)

//     Example output:

//     The

//     The walrus

//     The walrus danced!

//     The walrus danced! through

//     The walrus danced! through the

//     The walrus danced! through the trees!

//     The walrus danced! through the trees! in

//     The walrus danced! through the trees! in the

//     The walrus danced! through the trees! in the light!

//     The walrus danced! through the trees! in the light! of

//     The walrus danced! through the trees! in the light! of the

//     The walrus danced! through the trees! in the light! of the moon!





// Practice: Function Arguments

//     The learning objective of this exercise is to practice defining and using function arguments.

// Add a new argument to the function so that a developer can specify which character should be displayed instead of it always being an exclamation point.

// // I want to use a question mark
// addExcitement(sentence, "?")

//     Example output:

//     The

//     The walrus

//     The walrus danced?

//     The walrus danced? through

//     The walrus danced? through the

//     The walrus danced? through the trees?

//     The walrus danced? through the trees? in

//     etc..

// let sentence = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];

// function addExcitement(theWordArray, punctuation) {
//     let buildMeUp = ""

//     for (let i = 0; i < theWordArray.length; i++) {

//         if ((i + 1) % 3 === 0) {
//             buildMeUp += `${theWordArray[i]}${punctuation} `
//         } else {
//             buildMeUp += `${theWordArray[i]} `
//         }
//         console.log(buildMeUp)
//     }

// }

// addExcitement(sentence, "?");



// Challenge: Multiple Punctuation

//     Challenges are optional exercises that you can work once you've completed all the practice exercises and understand the concepts in them.

// Add a new argument to the function so that a developer can specify how many times the special character should be added.

// // I want to use a 4 asterisks
// addExcitement(sentence, "*", 4)

//     Example output:

//     The

//     The walrus

//     The walrus danced****

//     The walrus danced**** through

//     The walrus danced**** through the

//     The walrus danced**** through the trees****

//     The walrus danced**** through the trees**** in

//     etc..


// let sentence = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];

// function addExcitement(theWordArray, punctuation, numPunctuation) {
//     let buildMeUp = ""

//     for (let i = 0; i < theWordArray.length; i++) {

//         if ((i + 1) % 3 === 0) {
//             buildMeUp += theWordArray[i]
//             for (let k = 0; k < numPunctuation; k++) {
//                 buildMeUp += punctuation
//             }
//             buildMeUp += " "


//         } else {
//             buildMeUp += `${theWordArray[i]} `
//         }
//         console.log(buildMeUp)
//     }

// }

// addExcitement(sentence, "?", "4");



// Challenge: Arrow Functions

//     Challenges are optional exercises that you can work once you've completed all the practice exercises and understand the concepts in them.

// Watch the video (see above) about arrow functions, and see if you can rewrite addExcitement using that syntax.

let sentence = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];

let addExcitement = (theWordArray, punctuation, numPunctuation) => {

    let buildMeUp = ""

        for (let i = 0; i < theWordArray.length; i++) {
    
            if ((i + 1) % 3 === 0) {
                buildMeUp += theWordArray[i]
                for (let k = 0; k < numPunctuation; k++) {
                    buildMeUp += punctuation
                }
                buildMeUp += " "
    
    
            } else {
                buildMeUp += `${theWordArray[i]} `
            }
            console.log(buildMeUp)
        }
}


addExcitement(sentence, "?", "4");