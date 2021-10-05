let dinosaur = document.getElementById("dinosaur");
let cactus = document.getElementById("cactus");
let score = document.getElementById("score");
let speed = 1.0;

jump = () => {
    if (dinosaur.classList != "jump") {
        dinosaur.classList.add("jump");
    }
    setTimeout(() => {
        dinosaur.classList.remove("jump");
    }, 500);
}

document.body.onkeydown = (e) => {
    if (e.keyCode === 32) {
        jump();
    }
}


// main loop
const update = setInterval(() => {
    let characterTop = parseInt(window.getComputedStyle(dinosaur).getPropertyValue("top"));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
    score.innerHTML = parseInt(score.innerHTML) + 1;

    /*
    if (parseInt(score.innerHTML) > 1000 && parseInt(score.innerHTML) < 1500) {
        speed -= 0.1;
        cactus.classList.add("paused");
        cactus.style.setProperty('--test', speed.toString() + "s");
        round.innerHTML = "Speed Increase"
    }
    else if (parseInt(score.innerHTML) > 1500) {
        cactus.classList.remove()
    }*/


    /*
    if (parseInt(score.innerHTML) > 3030) {
        cactus.style.setProperty('--test', "0.7s");
        cactus.style.setProperty("left", "775px");
    }
    else if (parseInt(score.innerHTML) > 2030) {
        cactus.style.setProperty('--test', "0.8s");
        cactus.style.setProperty("left", "775px");
    }
    else if (parseInt(score.innerHTML) > 1030) {
        cactus.style.setProperty('--test', "0.9s");    
        cactus.style.setProperty("left", "775px");
    } */
    
    

    if (cactusLeft < 50 && cactusLeft > 30 && characterTop >= 225) {
        score.innerHTML = 0;
        alert("You Died");
    }
}, 10)