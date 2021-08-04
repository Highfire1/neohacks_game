// save everything useful to localStorage  
function saveEverything() {
    localStorage.setItem("datasaved", true)
    localStorage.setItem("items", JSON.stringify(items))
    localStorage.setItem("cauldron", JSON.stringify(cauldron))
    localStorage.setItem("dialoguetracker", JSON.stringify(dialoguetracker))
    saveAudioInformation()
    localStorage.setItem("audioinfo", JSON.stringify(audioInfo))
}

function loadEverything() {
    items = JSON.parse(localStorage.getItem("items"))
    cauldron = JSON.parse(localStorage.getItem("cauldron"))
    dialoguetracker = JSON.parse(localStorage.getItem("dialoguetracker"))
    audioInfo = JSON.parse(localStorage.getItem("audioinfo"))

    initializeAudio()
}

function clearData() {
    localStorage.removeItem("datasaved")
    localStorage.removeItem("items")
    localStorage.removeItem("cauldron")
    localStorage.removeItem("dialoguetracker")
    localStorage.removeItem("audioinfo")

    location.reload(); // reload page
}