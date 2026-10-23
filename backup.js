const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

let pX = 50
let pY = 50
let pXV = 0
let pYV = 0
let speed = 0.8
let friction = speed / 2

let nmyCX = 200
let nmyCY = 200

let enemy = []

// I hate myself so imna start working on bullet after i make enemy and walls are gay

// fucking hell imna need to do // Idk what I thought of writing so just think of kys

// a^2 + b^2 = c^2 (pytagoras-sats för pathfinding)

// 



function spwnNmy() {
    ctx.fillStyle = "black"
    ctx.fillRect(nmyCX, nmyCY, 50, 50)
    
    console.log(((Math.atan2(pX - nmyCX , pY - nmyCY)) * (180 / Math.PI) + (360 - 180)) % 360)
}



function drawPlayer() {
    ctx.fillStyle = "red"
    ctx.fillRect(pX, pY, 50, 50)
}

function movePlayer() {
    pX += pXV
    pY += pYV


    // Add if speed is close to zero just fucking do it to zero cuz it moves by itself
    if(pXV > 0) {pXV -= friction} else if(pXV < 0) {pXV += friction}
    if(pYV > 0) {pYV -= friction} else if(pYV < 0) {pYV += friction}

    if (Math.abs(pXV) < 0.1) pXV = 0;
    if (Math.abs(pYV) < 0.1) pYV = 0;

    if(pXV > 10) {pXV = 10} else if (pXV < -10) {pXV = -10}
    if(pYV > 10) {pYV = 10} else if (pYV < -10) {pYV = -10}
    

    if(keys["w"] || keys["ArrowUp"]) {
        pYV -= speed
    }
    if(keys["s"] || keys["ArrowDown"]) {
        pYV += speed
    }
    if(keys["d"] || keys["ArrowRight"]) {
        pXV += speed
    }
    if(keys["a"] || keys["ArrowLeft"]) {
        pXV -= speed
    }
}


const keys = {};

document.addEventListener("keydown", (e) => {
    keys[e.key] = true;
});

document.addEventListener("keyup", (e) => {
    keys[e.key] = false;
});






function resize() {
    canvas.height = window.innerHeight - 4;
    canvas.width = window.innerWidth - 4;

    if(canvas.width < 800) {document.write("penar too small ")}
}


function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    resize()
    movePlayer()
    drawPlayer()
    spwnNmy()


    requestAnimationFrame(loop)
}

loop()