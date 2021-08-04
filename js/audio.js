// audio will completely break if you go to other pages because chrome is annoying
// don't really know what to do about that

var audio;

let audioInfo = {
    "state" : false,
    "currentTrack" : "possession.mp3",
    "trackTime" : 0,
    "audioPromise" : false
}

function initializeAudio() {
    audio = new Audio('assets/' + audioInfo.currentTrack);
    audio.currentTime = audioInfo.trackTime 
    audio.loop = true // until multiple tracks is implemented
    
    if (audioInfo.audioPromise && audioInfo.state) {
        audio.play()
    }
}

function toggleAudio() {
    audioInfo.state = !audioInfo.state
    saveAudioInformation() 

    if (audioInfo.state) {
        audio.play()
        audioInfo.audioPromise = true
    } else {
        audio.pause()
    }
}

function saveAudioInformation() {
    if (audio === null || typeof audio == "undefined" ) {
        return
    }
    audioInfo.trackTime = audio.currentTime
}


// TODO: implement multiple tracks