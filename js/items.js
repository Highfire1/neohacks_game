// There are 3 important pieces of data

// items stores information on all items and their count
// recipes stores all the recipes
// cauldron stores everything in the cauldron

let items = {
    
    "catHair" : {
        name : "Hair of Cat",
        image : "error.png",
        count : 0,
    },
    
    "crowFeather" : {
        name : "Feather of Crow",
        image : "error.png",
        count : 5
    },
    
    "daisyPetal" : {
        name : "Petals of Daisy",
        image : "error.png",
        count : 5,
    },
    
    "eagleTalons" : {
        name : "Talons of Eagle",
        image : "error.png",
        count : 5,
    },
    
    "newtEye" : {
        name : "Eye of Newt",
        image : "error.png",
        count : 0,
    },
    
    "mushroom" : {
        name : "Mushrooms",
        image : "error.png",
        count : 0,
    },
    
    "nightlock" : {
        name : "Berries of Nightlock",
        image : "error.png",
        count : 0,
    },
    
    "pinecone" : {
        name : "Pinecone",
        image : "error.png",
        count : 0,
    },
    
    "phoenixTear" : {
        name : "Tear of Phoenix",
        image : "error.png",
        count : 0,
    },
    
    "tarDash" : {
        name : "Dash of Tar",
        image : "error.png",
        count : 0,
    },
    
    "adderTongue" : {
        name : "Tongue of Adder",
        image : "error.png",
        count : 0,
    },

    "magicFuel" : {
        name : "Magic Fuel",
        image : "error.png",
        count : 0
    },

    // add more items here

    // infinite items
    "stir" : {
        name : "Ladle",
        description : "stir the cauldron",
        image : "error.png",
        infinite : true,
        count : Number.MAX_SAFE_INTEGER
    },
    "strain" : {
        name : "Strainer",
        description : "strain the contents of your cauldron",
        image : "error.png",
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
        name : "Drop of Water",
        image : "error.png",
        infinite : true,
        count : Number.MAX_SAFE_INTEGER
    },
}


// todo make time / other things required in this 
let recipes = {
    "magicFuel" : [items.waterDrop, items.daisyPetal, items.stir],
    "newtEye" : [items.catHair, items.eagleTalons, items.pinecone],
    "phoenixTear" : [items.crowFeather, items.tarDash, items.waterDrop],
    "nightlock" : [items.mushroom, items.daisyPetal, items.adderTongue],
}

// used to check if recipes exist in the cauldron
function lookForRecipe(cauldron_array) {
    console.log("looking for recipe")
    console.log(cauldron_array)

    // if we don't want order to matter, add a .sort() around here
    // if we want to add some time-based mechanic, this will need some rework

    for (const [key, value] of Object.entries(recipes)) {
        // key is e.g. "magicFuel"
        // value is e.g. [items.eyeOfNewt, items.batWing]

        if (arraysEqual(value, cauldron_array)) {
            
            console.log("recipe detected!")

            // add more infrastructure + graphics here once they exist
            
            // empty the cauldron
            clearCauldron()
            // add the recipe item
            items[key].count += 1

            return key;
        }
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
        items[item].count -= 1
        items[item].txtnode.textContent = items[item].count
    }
    
    cauldron.push(items[item])
    cauldron.push(new Date())

    lookForRecipe(cauldron)

    saveEverything()
}

function clearCauldron() {
    cauldron = []
    saveEverything()
}


// from stackoverflow
// check if two objects are the same
function arraysEqual(a, b) {
    return JSON.stringify(a) === JSON.stringify(b)
  }
