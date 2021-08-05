// reminder to self:
// credit https://www.freepik.com/free-vector/luxury-old-library-interior-night-dark-empty-room-reading-with-books-wooden-shelves_9396114.htm somewhere


// setup cauldron array & 
let cauldron = []
let dialoguetracker = "introdialogue"

if (localStorage.getItem("datasaved") === null) {
    console.log("Save data not found, generating save template")
    // cauldron and dialoguetracker are declared here while items, audioinfo & datasaved are declared elsewhere
    saveEverything()
}

loadEverything()
lookForRecipe(cauldron)


displayItemWrapper(items, document.getElementById("ingredientGrid"))


// game loop
// is called once every frame

// requestAnimationFrame(gameLoop)

function gameLoop(timestamp) {
    console.log("mainloop called")
    requestAnimationFrame(gameLoop)
}

function lookForDialogue(created_item) {
    // intro scene
    if (dialoguetracker == "introdialogue") {
        goToDialogue(dialoguetracker)
    }

    // example scene
    if(created_item == "magicFuel" && items.magicFuel.count == 1) {
        goToDialogue("exampleDialogue")
    }
}

function goToDialogue(dialogue) {
    dialoguetracker = dialogue
    saveEverything()
    window.location.href = "dialogue.html";
}

lookForDialogue()