let isGameStart = false;
let hitCount = 0;

function startGame() {
    document.getElementById('gameStatus').innerText="Game started";
    hitCount = 0;
 isGameStart = true;

    let mosquito = document.getElementById('mosquito');

    let time = setInterval(() => {
        let i = Math.floor(Math.random() * 500) + 1;
        let j = Math.floor(Math.random() * 500) + 1;
        mosquito.style.left = i + "px";
        mosquito.style.top = j + "px";
    }, 1000);
    setTimeout(() => {
        clearTimeout(time);
        isGameStart = false;
        document.getElementById('gameStatus').innerText="Game Over";
    }, 30000);

}
function hitMosquito() {

    if(isGameStart) {
        hitCount++;
        document.getElementById("totalHit").innerText = hitCount;

    }

}

