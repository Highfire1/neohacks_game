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

    for (const recipe of Object.values(recipes)) {
        if (arraysEqual(recipe, cauldron_array)) {
            console.log("RECIPE DETECTED")
            return;
        }
    }
    console.log("no recipe")
}


// from stackoverflow
function arraysEqual(a, b) {
    return JSON.stringify(a) === JSON.stringify(b);
  }