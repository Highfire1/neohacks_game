// used to display image + button for every item on screen
function displayItem(item) {
    // throw if item is not in items
    if (typeof items[item] == "undefined") {
        throw "in addToCauldron, item " + item + " does not exist!"
    }

    // create image
    const imgnode = document.createElement("img")
    imgnode.src = "assets/" + items[item].image
    imgnode.alt = items[item].name
    imgnode.title = items[item].name

    // TODO : implement drag/drop to cauldron
    imgnode.setAttribute("draggable", "true")
    
    // sizing
    imgnode.style.width = "100%"
    imgnode.style.height = "100%"

    // create number text
    const txtnode = document.createElement("div")
    txtnode.setAttribute("id", item + "txtnode")
    txtnode.classList.add("bottom-right")

    if (items[item].infinite) {
        txtnode.textContent = "∞"
    } else {
        txtnode.textContent = items[item].count
    }

    // add to html
    let parnode = document.currentScript.parentNode
    parnode.appendChild(imgnode)
    parnode.appendChild(txtnode)

    // deprecated: will be replaced with drag/drop
    parnode.addEventListener("click", function(){addToCauldron(item)} )

    items[item].txtnode = document.getElementById(item + "txtnode")
}

// a wrapper for displayItem
function displayItemWrapper(obj) {

    let parentnode = document.currentScript.parentNode

    for (let key in obj) {

        const wrappernode = document.createElement("div")
        wrappernode.setAttribute("class", "container")

        const scriptnode = document.createElement("script")
        scriptnode.textContent = "displayItem(\""+ key + "\")"

        wrappernode.appendChild(scriptnode)
        parentnode.appendChild(wrappernode)
    }
}