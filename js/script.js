// reminder to self:
// credit https://www.freepik.com/free-vector/luxury-old-library-interior-night-dark-empty-room-reading-with-books-wooden-shelves_9396114.htm somewhere


// setup cauldron array
let cauldron = []
let dialoguetracker = 1

console.log(audioInfo)

if (localStorage.getItem("datasaved") === null) {
    console.log("Save data not found, generating save template")
    saveEverything()
}

loadEverything()

if (dialoguetracker == 1) {
    window.location.href = "dialogue.html";
}

initializeAudio()

// game loop
// is called once every frame
// requestAnimationFrame(gameLoop)

function gameLoop(timestamp) {
    console.log("mainloop called")
    requestAnimationFrame(gameLoop)
}