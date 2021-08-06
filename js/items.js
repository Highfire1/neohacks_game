// There are 3 important pieces of data

// items stores information on all items and their count
// recipes stores all the recipes
// cauldron stores everything in the cauldron

// ideas for more wholesome ideas
//blueberries
//lemongrass
//a bundle of daisies
//toadstools

// thoughts on mechanics
// I think it might be less confusing to scrap puzzles and make the cauldron itself a MEGA PUZZLE
// now that cauldron has infinite components and time, we can have cryptic recipes you need to decipher / figure out to make required stuff
// thats just my thoughts


let items = {
    
    "catHair" : {
        name : "Hair of Cat",
        image : "cathair.png",
        count : 0,
    },
    
    "crowFeather" : {
        name : "Feather of Crow",
        image : "crowfeather.png",
        count : 5
    },
    
    "daisyPetal" : {
        name : "Petals of Daisy",
        image : "daisy.png",
        count : 10,
    },
    
    "eagleTalons" : {
        name : "Talons of Eagle",
        image : "eagletalons.png",
        count : 5,
    },
    
    "newtEye" : {
        name : "Eye of Newt",
        image : "eyeofnewt.png",
        count : 0,
    },
    
    "mushroom" : {
        name : "Mushrooms",
        image : "mushroom.png",
        count : 0,
    },
    
    "blueberries" : {
        name : "Blueberries",
        image : "nightlock.png",
        count : 0,
    },
    
    "pinecone" : {
        name : "Pinecone",
        image : "pinecone.png",
        count : 0,
    },
    
    "phoenixTear" : {
        name : "Tear of Phoenix",
        image : "phoenixtear.png",
        count : 0,
    },
    
    "tarDash" : {
        name : "Dash of Tar",
        image : "tardrop.png",
        count : 0,
    },
    
    "adderTongue" : {
        name : "Tongue of Adder",
        image : "tongueofadder.png",
        count : 0,
    },

    "magicFuel" : {
        name : "Magic Fuel",
        image : "magicfuel.png",
        count : 0
    },

    // add more items here

    // infinite items
    "stir" : {
        name : "Ladle",
        description : "stir the cauldron",
        image : "ladle.png",
        infinite : true,
        count : Number.MAX_SAFE_INTEGER
    },
    "evaporate" : {
        name : "Turn up the heat",
        description : "description text",
        image : "error.png",
        infinite : true,
        count : Number.MAX_SAFE_INTEGER
    },
    "waterDrop" : {
        name : "Water",
        image : "water.png",
        infinite : true,
        count : Number.MAX_SAFE_INTEGER
    },
}


// FYI: the recipe syntax is kinda funky
// after every item, put a number in seconds, that number is the amount of delay required before the item can be put in
// use -1 if you don't want a delay
let recipes = {
    "magicFuel" : [items.waterDrop, -1, items.daisyPetal, -1, items.stir, -1],
    //"magicFuel" : [items.waterDrop, -1, items.daisyPetal, -1, items.stir],
    //"newtEye" : [items.catHair, items.eagleTalons, items.pinecone],
    //"phoenixTear" : [items.crowFeather, items.tarDash, items.waterDrop],
    //"nightlock" : [items.mushroom, items.daisyPetal, items.adderTongue],
}


// actually, it might be cool if the cauldron automatically changed color if no recipe is found but god knows how to implement that

// used to check if recipes exist in the cauldron
function lookForRecipe(cauldron_array) {
    console.log("looking for recipe")
    console.log(cauldron_array)

    let cauldronLength = cauldron_array.length // apparently calling .length is inefficient

    let lastDate = cauldron_array[1] // get first date
    let potentialRecipes = Object.keys(recipes).length

    // iterate through every recipe
    for (const [recipename, recipe] of Object.entries(recipes)) {

        for (let i = 0; i < cauldronLength; i++) {

            if (i > recipe.length || cauldronLength > recipe.length) {
                potentialRecipes -= 1
                break // break if cauldron is longer than recipe
            }


            if (i % 2 == 0) {
                // number is even, check ingredient
                if(!(cauldron_array[i].name == recipe[i].name)) {
                    //console.log("Mismatched ingredient, breaking out at index " + i)
                    potentialRecipes -= 1
                    break
                }
            } else {
                // check time
                if (i == 1) {
                    // skip check if is the first time
                    lastDate = cauldron_array[i]
                } else {
                    let timeDifference = cauldron_array[i] - lastDate
                    lastDate = cauldron_array[i]

                    // 5 seconds is hardcoded, for now
                    let maxtime = recipe[i] + 5
                    let mintime = recipe[i] - 5

                    if (recipe[i] == -1) {
                        // time not a factor in the recipe
                    } else if (timeDifference < maxtime && timeDifference > mintime) {
                        // time is within factor
                    } else {
                        // time is incorrect
                        //console.log("Time incorrect, breaking out of recipe")
                        potentialRecipes -= 1
                        break // break out of recipe
                    }
                }
            }
            
            // if all checks finish and cauldron length is correct then create recipe
            if (cauldronLength == recipe.length && cauldronLength - 1 == i){

                // TODO add graphics as well as a call to an item checker WHEN GRAPHICS FINISH
                console.log(items[recipename].name + " created!")
                
                clearCauldron()
                addItem(recipename)
            } 
        }
    }

    if(potentialRecipes == 0) {
        setCauldronState("ruined")
    }
}

// wrapper function to check for recipes
function addToCauldron(item) {

    // check if item is addable
    if (items[item].count == 0) {
        return;
    }
    if (typeof items[item] == "undefined") {
        throw "in addToCauldron, item " + item + " does not exist!"
    }

    // remove item / update item count
    if (!items[item].infinite) {
        substractItem(item)
    }
    
    cauldron.push(items[item])
    let unixTime = new Date().getTime() / 1000
    cauldron.push(unixTime)

    lookForRecipe(cauldron)

    saveEverything()
}

function clearCauldron() {
    cauldron = []
    setCauldronState("default")
    saveEverything()
}

function setCauldronState(state) {
    let cauldron = document.getElementById("cauldron")

    if (state == "ruined") {
        cauldron.src = "assets/ruinedcauldron.png"
    } else if (state == "default") {
        cauldron.src = "assets/cauldron.png"
    }
}

function addItem(item) {
    items[item].count += 1
    document.getElementById(item + "txtnode").textContent = items[item].count

    lookForDialogue(item)
}

function substractItem(item) {
    items[item].count -= 1
    document.getElementById(item + "txtnode").textContent = items[item].count
}