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

    // adds listener to button so it calls addToCauldron when its clicked
    imgnode.addEventListener("click", function(){addToCauldron(item)} )
    
    // sizing
    imgnode.style.width = "100%"
    imgnode.style.height = "100%"

    const txtnode = document.createElement("div")
    txtnode.classList.add("bottom-right")

    if (items[item].infinite) {
        txtnode.textContent = "∞"
    } else {
        txtnode.textContent = items[item].count
    }

    // add to html
    document.currentScript.parentNode.appendChild(imgnode)
    document.currentScript.parentNode.appendChild(txtnode)

    // CHANGE THIS NUMBER IF MORE CHILDS ARE ADDED
    items[item].txtnode = document.currentScript.parentNode.children[2]
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