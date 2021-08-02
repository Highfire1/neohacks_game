// example usages
// console.log(items.batWing.name) 
// addToCauldron(items.eyeOfNewt)
// lookForRecipe(cauldron);

// setup cauldron array
let cauldron = []
let dialoguetracker = 1

// mode 0 = intro sequence
// mode 1 = cauldron room
// mode 2 = puzzle
// mode 3 = dialogue
// mode 4 = end
let mode = 0





// load from localstorage
loadEverything()

var audio = new Audio('assets/possession.mp3');
// chrome won't let this play until the user clicks anything
audio.play();

console.log("in script.js, dialoguetracker is: " + dialoguetracker)

if (dialoguetracker == 1) {
    window.location.href = "dialogue.html";
}
