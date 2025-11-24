let body = document.querySelector('body');
let player = document.querySelector('#player');
let notes = document.querySelectorAll('.note');
body.addEventListener('keydown', function (dets) {



    if (!/^[a-zA-Z]$/.test(dets.key)) {
        return
    }
    else {
        let key = document.querySelector(`#${dets.key.toUpperCase()}`)
        key.style.scale = 0.95;
        console.log(dets)

        console.log(dets.key.toUpperCase());
        const audio = new Audio(`audios/${dets.key.toUpperCase()}.mp3`);
        audio.play();
        // player.src = `audios/${dets.key.toUpperCase()}.mp3`
        // player.play();
    }
})
body.addEventListener('keyup', function (dets) {



    if (!/^[a-zA-Z]$/.test(dets.key)) {
        return
    }
    else {
        let key = document.querySelector(`#${dets.key.toUpperCase()}`)
        key.style.scale = 1


        
    }
})


notes.forEach(function(note){
    note.addEventListener('click', function(dets){
        const audio = new Audio(`audios/${dets.target.id}.mp3`);
        audio.play();
    })
})