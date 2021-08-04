let strings = {

    "introdialogue" : {
        "onInitialize" : "console.log('running initialization code'); introdialogue()",
        "text" : [
            ["???", "Once upon a time in a far away land,"],
            ["???", "There lived a witch named Celestina."],
            ["???", "She lived with her pet bat, Ambrose."],
            ["???", "And she brewed potions for a living."],
            ["???", "One day as she was brewing a potion, a current of magical wind flew in through the window!", "console.log('halfway through dialogue!')"],
            ["???", "And the wind whisked Ambrose away!", "yeetAmbrose()"],
            ["Celestina", "AAAAAAAAAAAAAAAAAAAAA"],
            ["Celestina", "Ambrose!"],
            ["???", "Celestina rushed out and searched for hours but Ambrose was nowhere to be found."],
            ["Celestina", "time to do potion brewing xd haha :D"],
        ]
    },

    "meetIvo" : {
        "onInitialize" : "",
        "text" : [
            ["Farmer Ivo", "Celestina, long time no see!"],
            ["Celestina", "Farmer Ivo, it's terrible "],
            ["Farmer Ivo", "Vaht happened?"],
            ["Celestina", "Ambrose is gone!"],
            ["Farmer Ivo", "My condolences"],
            ["Celestina", "!!!"],
            ["Celestina", "Oh no, Ambrose isn't dead."],
            ["Celestina", "I'm sure he's having the time of his life!"],
            ["Celestina", "But I need him to make my potions!"],
            ["Celestina", "Farmer Ivo, surely you can help! I need some plants from your field."],
            ["Farmer Ivo", "I'm afraid your out of luck."], // MAKE RUSSIAN
            ["Farmer Ivo", "PUZZLE EXPLANATION"],
        ]
    },

}



let stringsbad = {
    // intro sequence
    "introdialogue" : [
        ["???", "Once upon a time in a far away land,"],
        ["???", "There lived a witch named Celestina."],
        ["???", "She lived with her pet bat, Ambrose."],
        ["???", "And she brewed potions for a living."],
        ["???", "One day as she was brewing a potion, a current of magical wind flew in through the window!"],
        ["???", "And the wind whisked Ambrose away!"],
        ["Celestina", "AAAAAAAAAAAAAAAAAAAAA"],
        ["Celestina", "Ambrose!"],
        ["???", "Celestina rushed out and searched for hours but Ambrose was nowhere to be found."],
        ["Celestina", "time to do potion brewing xd haha :D"],
    ],
    // meet farmer ivo
    2 : [
        ["Farmer Ivo", "Celestina, long time no see!"],
        ["Celestina", "Farmer Ivo, it's terrible "],
        ["Farmer Ivo", "Vaht happened?"],
        ["Celestina", "Ambrose is gone!"],
        ["Farmer Ivo", "My condolences"],
        ["Celestina", "!!!"],
        ["Celestina", "Oh no, Ambrose isn't dead."],
        ["Celestina", "I'm sure he's having the time of his life!"],
        ["Celestina", "But I need him to make my potions!"],
        ["Celestina", "Farmer Ivo, surely you can help! I need some plants from your field."],
        ["Farmer Ivo", "I'm afraid your out of luck."], // MAKE RUSSIAN
        ["Farmer Ivo", "PUZZLE EXPLANATION"] 
    ],
    // introduction to puzzle 1
    3 : [
        ["Celestina", "Here goes nothing!"]
    ],
    // meet back with farmer ivo
    4 : [
        ["Farmer Ivo", "You made it!"],
        ["Celestina", "wow that [puzzle] was hard for [reasons]"],
        ["Celestina", "anyways baii"],

    ],
    // meet idalia
    5 : [
        ["???", "..."],
        ["Celestina", "Hello?"],
        ["Celestina", "I know I heard something..."],
        ["???", "BOO"],
        ["Celestina", "insert exposition here"]

    ],
    // dialogue for puzzle 2
    6 : [
        ["Celestina", "[relevant text here]"],

    ],
    // meet back with idalia
    7 : [
        ["Celestina", "yay!"],

    ],
    // meet petrarch
    8 : [
        ["Celestina", ""],

    ],
    // puzzle 3
    9 : [

    ],
    // meet back with petrarch + finally got everything!
    10 : [

    ],
    // use the potion / exeunt
    11 : [

    ],

    // STRETCH GOALS
    // in other words bonus dialogue for other places
    20 : [

    ]
} 

var dialoguetracker
loadEverything()
let dialoguenum = 0


function advanceDialogue() {

    if(dialoguenum == strings[dialoguetracker].text.length) {
        dialoguetracker = null
        saveEverything()
        window.location.href = "index.html";
        return;
    }
    

    let currentDialogue = strings[dialoguetracker].text[dialoguenum]

    document.getElementById("dialogueText").textContent = currentDialogue[1]

    // run code of dialogue entry
    if (typeof currentDialogue[2] != 'undefined') {
        eval(currentDialogue[2])
    }

    // increment dialogue entry tracker
    dialoguenum += 1
}

function loadDialogue() {
    console.log("Initializing dialogue...")

    // run initialization for dialogue
    if (strings[dialoguetracker].onInitialize.length != 0) {
        eval(strings[dialoguetracker].onInitialize)
    }

    advanceDialogue()
}

// === CUSTOM FUNCTIONS BELOW ===
let dialogueScene = document.getElementById("dialogueScene")


function introdialogue() {
    // the below is equivalent to doing this
    // <img id="witch" src="assets/witch.png" alt="image of a witch">
    // <img class="ambrose" src="assets/bat.png" alt="image of a bat"></img>

    let celestina = document.createElement("img")
    celestina.setAttribute("id", "witch")
    celestina.setAttribute("src", "assets/witch.png")
    celestina.setAttribute("alt", "image of a cute witch :)")

    let ambrose = document.createElement("img")
    ambrose.setAttribute("class", "ambrose")
    ambrose.setAttribute("src", "assets/bat.png")
    ambrose.setAttribute("alt", "image of a bat")
    ambrose.setAttribute("id", "ambrose")

    dialogueScene.appendChild(celestina)
    dialogueScene.appendChild(ambrose)
}



// === HELPER FUNCTIONS
var starttime
 
// TODO: make this actually useful
// see http://www.javascriptkit.com/javatutors/requestanimationframe.shtml for info
function moveit(timestamp, element, dist, duration){
    //if browser doesn't support requestAnimationFrame, generate our own timestamp using Date:
    var timestamp = timestamp 
    var runtime = timestamp - starttime
    var progress = runtime / duration

    progress = Math.min(progress, 1)
    element.style.left = (dist * progress).toFixed(2) + 'px'
    if (runtime < duration){ // if duration not met yet
        requestAnimationFrame(function(timestamp){ // call requestAnimationFrame again with parameters
            moveit(timestamp, element, dist, duration)
        })
    }
}

function yeetAmbrose() {
    requestAnimationFrame(function(timestamp){
        starttime = timestamp 
        moveit(timestamp, document.getElementById('ambrose'), 400, 4000) // 400px over 1 second
    })
}
