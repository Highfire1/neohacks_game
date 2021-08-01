// save everything useful to localStorage  
function saveEverything() {
    localStorage.setItem("items", JSON.stringify(items))
    localStorage.setItem("cauldron", JSON.stringify(cauldron))
}

function loadEverything() {

    if (localStorage.getItem("items") === null) {
        console.log("no save data found")
        return
      }
    console.log("save data found")

    items = JSON.parse(localStorage.getItem("items"))
    cauldron = JSON.parse(localStorage.getItem("cauldron"))
}

function clearData() {
    localStorage.removeItem("items")
    localStorage.removeItem("cauldron")
}