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

// unused currently
function pretty_dialogue() {  
    console.log("doing dialogue")

    // todo : read wanted dialog from localStorage

    const dianode = document.createElement("dialog") 
    const pnode = document.createElement("p")
    const qnode = document.createElement("q")
    
    console.log(strings[dialogue][dialoguenum][1])
    qnode.textContent = strings[dialogue][dialoguenum][1]

    pnode.appendChild(qnode)
    dianode.appendChild(qnode)

    dianode.setAttribute("open", true)
    dianode.setAttribute("id", "dialogue")
    dianode.addEventListener("click", function(){edit_dialogue()} )

    document.currentScript.parentNode.appendChild(dianode)

    dialoguenum += 1
}

function editDialogue() {
    console.log(document.getElementById("dialogue"))

    document.getElementById("dialogue").textContent = strings[dialogue][dialoguenum][1]
    
    dialoguenum += 1
}