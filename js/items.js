// There are 3 important pieces of data

// items stores information on all items and their count
// recipes stores all the recipes
// cauldron stores everything in the cauldron

let items = {
    
    "catHair" : {
        name : "Hair of Cat",
        image : "cathair.png",
        count : 0,
    },
    
    "crowFeather" : {
        name : "Feather of Crow",
        image : "crowfeather.png",
        count : 0
    },
    
    "daisy" : {
        name : "Daisy",
        image : "daisy.jpg",
        count : 0,
    },
    
    "eagleTalons" : {
        name : "Talons of Eagle",
        image : "eagletalons.jpg",
        count : 0,
    },
    
    "newtEye" : {
        name : "Eye of Newt",
        image : "eyeofnewt.png",
        count : 0,
    },
    
    "mushroom" : {
        name : "Mushrooms",
        image : "mushroom.jpg",
        count : 0,
    },
    
    "nightlock" : {
        name : "Berries of Nightlock",
        image : "nightlock.jpg",
        count : 0,
    },
    
    "phoenixtear" : {
        name : "Tear of Phoenix",
        image : "phoenixtear.png",
        count : 0,
    },
    
    "tarDash" : {
        name : "Dash of Tar",
        image : "tardrop.jpg",
        count : 0,
    },
    
    "adderTongue" : {
        name : "Tongue of Adder",
        image : "tongueofadder.jpg",
        count : 0,
    },
    
    "waterDrop" : {
        name : "Drop of Water",
        image : "waterdrop.png",
        count : 0,
    },

    "magicFuel" : {
        name : "Magic Fuel",
        image : "",
        count : 0
    }

    // add more items here

  };

let recipes = {
    "magicFuel" : [items.newtEye, items.crowFeather],
    "phoenixTear" : [items.crowFeather, items.tarDash, items.waterDrop],
    "nightlock" : [items.mushroom, items.daisy, items.newtEye]
}

// used to check if recipes exist in the cauldron
function lookForRecipe(cauldron_array) {

    // if we don't want order to matter, add a .sort() around here
    // if we want to add some time-based mechanic, this will need some rework

    for (const [key, value] of Object.entries(recipes)) {
        // key is e.g. "magicFuel"
        // value is e.g. [items.eyeOfNewt, items.batWing]

        if (arraysEqual(value, cauldron_array)) {
            
            console.log("recipe detected!")

            // add more infrastructure + graphics here once they exist
            
            // empty the cauldron
            cauldron = []
            // add the recipe item
            items[key].count += 1

            return key;
        }
    }
}

// wrapper function to check for recipes
function addToCauldron(item) {
    console.log(items[item])
    console.log(items)
    if (typeof items[item] == "undefined") {
        throw "in addToCauldron, item " + item + " does not exist!"
    }
    
    items[item].count -= 1
    items[item].txtnode.textContent = items[item].count

    console.log(items[item].name + " added to cauldron!")
    cauldron.push(items[item])

    lookForRecipe(cauldron)
    saveEverything()
}


// from stackoverflow
// used to check if two objects are the same
function arraysEqual(a, b) {
    //console.log(JSON.stringify(a))
    //console.log(JSON.stringify(b))
    return JSON.stringify(a) === JSON.stringify(b)
  }
