let d = new Date();
document.body.innerHTML = "<h1>Today's date is " + d + "</h1>"


document.body.innerHTML += "<p>batwing name = " + items.batWing.name + "</p>"
console.log(items.batWing.name) 

let cauldron = []

cauldron.push(items.eyeOfNewt)

lookForRecipe(cauldron);

cauldron.push(items.batWing)

lookForRecipe(cauldron);
