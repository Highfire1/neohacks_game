// example usages
// console.log(items.batWing.name) 
// addToCauldron(items.eyeOfNewt)
// lookForRecipe(cauldron);

// setup cauldron array
let cauldron = []

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
// audio.play();

