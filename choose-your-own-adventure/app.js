


// # Choose Your Own Adventure

// Create a "Choose Your Own Adventure" style game in `app.js`.  This is a story where the user is frequently asked what the protagonist should do.  The story progresses based on what the user says should happen.

// **GETTING STARTED**

// `cd` into this directory and run `npm i` in it.  This will install the `prompt-sync` package which will allow you to run the `prompt()` function.

// **TIPS:**

// - Use the provided `prompt()` function to retrieve input from the user.
// - Try to use as many functions as you can
// 	- To game is structured in sections, each containing two parts: what just happend and a prompt for what to do next.  Perhaps each section is a function?
// 	- You could structure it so the functions take parameters relating to what the user has chosen to do
// - Use variables to keep track of things that have happened in the story (e.g. how much money the user has, has the user accomplished certain tasks)
// - Try to turn the app into as much of a game as possible, as opposed to just a simple story


// make functions
// a lot of if checks

// jedi master for a dog 




const prompt = require('prompt-sync')();
const username = prompt('What is your name? ');
console.log(`Welcome ${username}`);



// objective
let objective = ["eat", "sleep", "tricks", "outfit", "playtime"];
//activites-  
// gain 10 per trick 
// 
let activities = ["wave", "shake", "roll over", "hug"];


// eat - gain 10
// sleep - gain 10 
// activities - lose 10 

let health = 0; 




//currency 

// eat - loses $5 meal
let money = 100; 


 





console.log(`You have entered into Dog-Topia ${username}`);

console.log("objective of the game is to have your dog living their best life ");

 





whatToDo() 


getStatus()






// script
function whatToDo() {
    let exercise = prompt('What is your task for today? Choose from the following: ' + objective + ' ' );

    if (exercise === "eat") {
        console.log(`Lets go ${exercise}`);
        health+=10;
        console.log('You have earned 10 points!' + 'Your current health is: ' + health);

    } else if (exercise === "sleep") {
        console.log('Yes, our pup is tired, lets have them go sleep'); 
        health+=10;
        console.log('You have earned 10 points!' + 'Your current health is: ' + health);
    }
    else if (exercise === "tricks") {
        console.log('Yes lets train your pup with the following: ' + activites)


    }
    else if (exercise === "outfit") {
        console.log('Woo, lets go dress up your pup ')
    }
    else if (exercise === "playtime") {
        console.log('lets go meet up with some friends')
    }
}




function getStatus() {
    console.log("Here is your status update! ");
    console.log('You currently have $'+money);
    console.log('Your health level is at' + health);
    if (health <= 10){
        console.log('Maybe consider having your dog sleep or eat');
    } else {
        console.log('Your dogs health is amazing, good job!');
    }

}