const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

let pX = 50
let pY = 50
let pXV = 0
let pYV = 0
let maxSpeed = 10


let dir = Math.PI / 4

// Fix car img til next time
let car = new Image;
car.src = "frri"

function drawPlayer() {
    ctx.fillStyle = "red"
    ctx.translate(pX + 40, pY + 25)
    ctx.rotate(dir)
    ctx.fillRect(-40, -25, 80, 50)
    ctx.resetTransform()
}

function movePlayer() {

    pXV += Math.cos(dir) / 5;
    pYV += Math.sin(dir) / 5;

    pX += pXV
    pY += pYV

    if (pXV > maxSpeed) {pXV = maxSpeed} else if (pXV < -maxSpeed) {pXV = -maxSpeed}
    if (pYV > maxSpeed) {pYV = maxSpeed} else if (pYV < -maxSpeed) {pYV = -maxSpeed}
    

    if (keys["d"] || keys["ArrowRight"]) {
        dir += 0.07;
    }
    if (keys["a"] || keys["ArrowLeft"]) {
        dir -= 0.07;
    }
    if (keys["s"] || keys["ArrowDown"]) {
        pXV *= 0.95
        pYV *= 0.95
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


    requestAnimationFrame(loop)
}

loop()