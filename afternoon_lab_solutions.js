


const quotes = ["live life", "work hard", "do you"];

const randomThings = [1, 10, "Hello", true]


randomThings[2] = "World"; 
console.log(randomThings[2]);


// Given the following array const ourClass = ["Stan Lee", "Zoom", "Github", "Slack"]
const ourClass = ["Stan Lee", "Zoom", "Github", "Slack"]
// 3rd comment in the array
console.log(ourClass[2]);

ourClass[2] = "Octocat";

console.log(ourClass[2]);


// add a element to the ARRAY
ourClass[4] = "Cloud City";
console.log(ourClass[4]);



// Breakout Room 2
const myArray = [5 ,10 ,500, 20]

// push method 

myArray.push('Egon');

console.log(myArray);

myArray.splice(4,1)

console.log(myArray);

myArray.unshift('Bob Marley');
console.log(myArray);

myArray.splice(0,1);
console.log(myArray);


myArray.reverse();
console.log(myArray);

if (myArray < 5) {
    console.log("little number");
} else if (myArray > 10) {
    console.log("big number"); 
} else {
    console.log("monkey");
}


const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "GA hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];

  console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!")


  kristynsCloset.shift(0,1);


  console.log(kristynsCloset);


  kristynsCloset.splice(5,0,"raybans");

  console.log(kristynsCloset);

  kristynsCloset[4] = "stained knit hat";



  console.log(kristynsCloset);
// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];

 console.log(thomsCloset[0][0]);
 console.log(thomsCloset[1][0]);

 console.log(thomsCloset[2][0]);

 console.log("Thom is looking fierce in a " + thomsCloset[0][0] 
 + ", " + thomsCloset[1][1] + " and " + thomsCloset [2][1]);

 thomsCloset[1][2] = "Footie Pajamas"

 console.log( thomsCloset[1][2]);


 const twoDArray = [
    [9,8,7],
    [6,5,4],
    [3,2,1],
  ];




twoDArray.reverse();

for (const element of twoDArray) {
    element.reverse();
    console.log(element);

  }
  
  