// used to display image + button for every item on screen
function displayItem(item) {
    // throw if item is not in items
    if (typeof items[item] == "undefined") {
        throw "in addToCauldron, item " + item + " does not exist!"
    }

    // create image
    // possible we may need to resize the image here
    const imgnode = document.createElement("img");
    imgnode.src = items[item].image

    //create button
    const buttonnode = document.createElement("button")
    buttonnode.innerHTML = "Add to cauldron"
    // adds listener to button so it calls addToCauldron when its clicked
    buttonnode.addEventListener("click", function(){addToCauldron(item)} );

    // add to html
    document.currentScript.parentNode.appendChild(imgnode)
    document.currentScript.parentNode.appendChild(buttonnode)
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