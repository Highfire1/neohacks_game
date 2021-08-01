let strings = {
    1 : [
        ["???", "Once upon a time in a far away land,"],
        ["???", "There lived a witch named Celestina."],
        ["???", "She lived with her pet bat, Ambrose."],
        ["???", "And she brewed potions for a living."],
        ["???", "One day as she was brewing a potion, she didn't realize that the window was open and a magical wind current came through the door."],
        ["???", "Ambrose was whisked away by the wind"],
        ["???", "Celestina turned around to find that Ambrose was missing."],
    ]
} 

// this will be replaced later
let dialogue = 1

let dialoguenum = 0


function editDialogue() {

    // todo : read wanted dialog from localStorage

    if(dialoguenum == strings[dialogue].length) {
        console.log("going back to previous location")
        // add code here
        return
    }

    console.log(document.getElementById("dialogueText"))

    document.getElementById("dialogueText").textContent = strings[dialogue][dialoguenum][1]
    
    dialoguenum += 1
}