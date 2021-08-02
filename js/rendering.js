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
    imgnode.style.height = "75%"

    const txtnode = document.createElement("div")
    txtnode.classList.add("bottom-right")

    if (!(items[item].count == Number.MAX_SAFE_INTEGER)) {
        txtnode.textContent = items[item].count
    } else {
        txtnode.textContent = "∞"
    }

    // add to html
    document.currentScript.parentNode.appendChild(imgnode)
    document.currentScript.parentNode.appendChild(txtnode)

    // CHANGE THIS NUMBER IF MORE CHILDS ARE ADDED
    items[item].txtnode = document.currentScript.parentNode.children[2]
}

// a wrapper for displayItem
// I don't know if this is useful as it will only make rows, not columns
// also not tested but I can clean it up if we need it
function displayItemWrapper(obj) {
    let parentnode = document.currentScript.parentNode

    for (const [key, value] of Object.entries(obj)) {
        const itemnode = document.createElement("item")
        const scriptnode = document.createElement("script")

        itemnode.appendChild(scriptnode)
        // no clue if this works or not
        scriptnode.setAttribute(displayItem(key))
        
        parentnode.appendChild(itemnode)
    }
}