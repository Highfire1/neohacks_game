// save everything useful to localStorage  
function saveEverything() {
    localStorage.setItem("items", JSON.stringify(items))
    localStorage.setItem("cauldron", JSON.stringify(cauldron))
    localStorage.setItem("dialoguetracker", JSON.stringify(dialoguetracker))
}

function loadEverything() {

    console.log(dialoguetracker)

    if (localStorage.getItem("dialoguetracker") === null) {
        console.log("no dialoguetracker found")
        dialoguetracker = 1
        localStorage.setItem("dialoguetracker", JSON.stringify(dialoguetracker))
        return
    }

    if (localStorage.getItem("items") === null) {
        dialoguetracker = JSON.parse(localStorage.getItem("dialoguetracker"))
        console.log("uninitialized but loaded dialoguetracker from storage: ", dialoguetracker)
        return
    }
    console.log("save data found")

    items = JSON.parse(localStorage.getItem("items"))
    cauldron = JSON.parse(localStorage.getItem("cauldron"))
    dialoguetracker = JSON.parse(localStorage.getItem("dialoguetracker"))

    console.log("loaded dialoguetracker:" + dialoguetracker)
}

function clearData() {
    localStorage.removeItem("items")
    localStorage.removeItem("cauldron")
    localStorage.removeItem("dialoguetracker")
}