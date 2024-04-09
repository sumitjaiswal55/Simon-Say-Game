let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "green","blue"];

let started  = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
   if (started == false){
    console.log("Game Started");
    started = true;

    levelUp();
   }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    }, 200);
}


function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash")
    }, 200);
}


function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() *3);
    let randColor = btns[randIdx];
    let randbtn = document.querySelector(`.${randColor}`);
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randbtn.innerText);
    gameSeq.push(randColor);
    console.log(gameSeq)
    gameFlash(randbtn);
}

function checkAns(idx) {
    console.log(`Current Level: ${level}`);

    // let idx = level - 1;

    if(userSeq[idx] === gameSeq[idx]){
    console.log("Same Value");
    if (userSeq.length == gameSeq.length){
        setTimeout(levelUp, 1000)
        // levelUp();
    }
    } else{
        h2.innerHTML = `Game Over! Your score is <b> ${level} </b> . Press any key to restart`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function (){
        document.querySelector("body").style.backgroundColor = "black";
        },150)
        reset();
    }

}

function btnPress (){
    console.log(this)
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    console.log(userColor);
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}


function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}





