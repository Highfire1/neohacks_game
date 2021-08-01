let items = {

    "eyeOfNewt" : {
        name : "Eye of Newt",
        image : "newt.png",
        count : 0,
    },

    "batWing" : {
        name : "Wing of Bat",
        image : "batwing.png",
        count : 0
    },

    "magicFuel" : {
        name : "Magic Fuel",
        image : "",
        count : 0
    }

    // add more items here

  };

let recipes = {
    "magicFuel" : [items.eyeOfNewt, items.batWing]
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
            items[key].count += 1
            return key;
        }
    }
}

// wrapper function to check for recipes
function addToCauldron(item) {
    if (typeof items[item] == "undefined") {
        throw "in addToCauldron, item " + item + " does not exist!"
    }

    cauldron.push(items[item]);

    lookForRecipe(cauldron);
}


// from stackoverflow
// used to check if two objects are the same
function arraysEqual(a, b) {
    //console.log(JSON.stringify(a))
    //console.log(JSON.stringify(b))
    return JSON.stringify(a) === JSON.stringify(b);
  }