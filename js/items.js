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

  };

let recipes = {
    "magicFuel" : [items.eyeOfNewt, items.batWing]
}

function lookForRecipe(cauldron_array) {

    // if we don't want order to matter, add a .sort() around here
    // if we want to add some time-based mechanic, this will need some rework

    for (var key in recipes) {
        console.log(key)              // returns magicFuel
        console.log(cauldron_array)   // returns an array

        if (arraysEqual(recipes.key, cauldron_array)) {

            console.log("RECIPE DETECTED")
            break;
        }
    }
    console.log("no recipe")
}

// from stackoverflow
function arraysEqual(a1,a2) {
    /* WARNING: arrays must not contain {objects} or behavior may be undefined */
    return JSON.stringify(a1)==JSON.stringify(a2);
}