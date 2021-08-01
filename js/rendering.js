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