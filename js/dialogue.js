let strings = {
    // intro sequence
    1 : [
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

let dialoguenum = 0
dialoguetracker = JSON.parse(localStorage.getItem("dialoguetracker"))


function editDialogue() {

    console.log(dialoguetracker)

    

    if(dialoguenum == strings[dialoguetracker].length) {
        console.log("going back to previous location")

        dialoguetracker += 1
        localStorage.setItem("dialoguetracker", JSON.stringify(dialoguetracker))
        
        console.log("saved dialoguetracker as " + dialoguetracker)
        window.location.href = "index.html";
        return;

    }

    

    //console.log(document.getElementById("dialogueText"))

    document.getElementById("dialogueText").textContent = strings[dialoguetracker][dialoguenum][1]
    
    dialoguenum += 1
}