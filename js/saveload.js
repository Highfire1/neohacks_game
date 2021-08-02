// save everything useful to localStorage  
function saveEverything() {
    localStorage.setItem("datasaved", true)
    localStorage.setItem("items", JSON.stringify(items))
    localStorage.setItem("cauldron", JSON.stringify(cauldron))
    localStorage.setItem("dialoguetracker", JSON.stringify(dialoguetracker))
}

function loadEverything() {
    items = JSON.parse(localStorage.getItem("items"))
    cauldron = JSON.parse(localStorage.getItem("cauldron"))
    dialoguetracker = JSON.parse(localStorage.getItem("dialoguetracker"))
}

function clearData() {
    localStorage.removeItem("datasaved")
    localStorage.removeItem("items")
    localStorage.removeItem("cauldron")
    localStorage.removeItem("dialoguetracker")
}