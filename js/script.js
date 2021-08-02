// example usages
// console.log(items.batWing.name) 
// addToCauldron(items.eyeOfNewt)
// lookForRecipe(cauldron);





// setup cauldron array
let cauldron = []
let dialoguetracker = 1

if (localStorage.getItem("datasaved") === null) {
    console.log("Save data not found, generating save template")
    saveEverything()
}

loadEverything()



if (dialoguetracker == 1) {
    window.location.href = "dialogue.html";
}


// insert game loop here