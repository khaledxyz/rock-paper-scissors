// DOM elemnts
const rockBtn = document.querySelector('.rock');
const scissorsBtn = document.querySelector('.scissors');
const paperBtn = document.querySelector('.paper');
const scoreBoardEl = document.querySelector('.scoreboard');
const statusEl = document.querySelector('.status');

// vars
let options = ['✊' , '✌️', '✋']
let playerOption;
let playerScore = 0;
let cpuScore = 0;
let winner = 0;

// User input
rockBtn.addEventListener('click', () => {playerOption = options[0]; play();})
scissorsBtn.addEventListener('click', () => {playerOption = options[1]; play();})
paperBtn.addEventListener('click', () => {playerOption = options[2]; play();})



// functions
function play() {

    // pc random choice
    const random = Math.trunc(Math.random() * (3 - 0) + 0)
    let cpuOption = options[random]


    if(playerOption === cpuOption) {winner = "It's a draw." }
    if(playerOption === "✊") {
        if(cpuOption === "✌️"){console.log("player wins"); playerScore++; winner = "Player Wins!"}
        if(cpuOption === "✋"){console.log("pc wins"); cpuScore++; winner = "Comp Wins!"}
    }
    if(playerOption === "✌️") {
        if(cpuOption === "✋"){console.log("player wins"); playerScore++; winner = "Player Wins!"}
        if(cpuOption === "✊"){console.log("pc wins"); cpuScore++; winner = "Comp Wins!"}
    }
    if(playerOption === "✋") {
        if(cpuOption === "✊"){console.log("player wins"); playerScore++; winner = "Player Wins!"}
        if(cpuOption === "✌️"){console.log("pc wins"); cpuScore++; winner = "Comp Wins!"}
    }

    statusEl.textContent = `${playerOption} |vs| ${cpuOption} ${winner}`
    scoreBoardEl.textContent = `You: ${playerScore} ||vs.|| Com: ${cpuScore}`
}

function reset() {
    playerScore = 0;
    cpuScore = 0;
    statusEl.textContent = `❓ |vs| ❓`
    scoreBoardEl.textContent = `You: ${playerScore} ||vs.|| Com: ${cpuScore}`
}
