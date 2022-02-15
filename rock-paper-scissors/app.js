// function happens

function respondToUserChoiceRock(){
    userChoice = "rock";
    console.log("User chose " + userChoice)
}

//variable
const rockButton = document.querySelector('#rock')

rockButton.addEventListener("click",respondToUserChoice)

function respondToUserChoiceScissors(){
    userChoice = "scissors";
    console.log("User chose " + userChoice)
}

const rockButton = document.querySelector('#scissors')

function respondToUserChoicePaper(){
    userChoice = "paper";
    console.log("User chose " + userChoice)
}

const rockButton = document.querySelector('#paper')



//1 store the users choice of button in a variable by using let

let userChoice = null;

// 2. create random choice for the computer 

function ComputerChooses(){
    computerChoice = choices[Math.floor(Math.random()*choices.length)]; 
    console.log(computerChoice)
}
let computerChoice = null;
let choices = ["rock", "paper", "scissors"]

//3. Compare the two choices, see who wins

if (userChoice ==="rock"){
    if(computerChoice === "rock"){
        console.log("TIE GAME")
    }
    else if (computerChoice === "scissors"){
         
    }
}else if(userChoice ==="paper"){

}else if(userChoice === "scissors"){

}