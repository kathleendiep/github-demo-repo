// section 1 
//What does the acronym DRY stand for? Why should we pay attention to it? What programming tools have we learned to write DRY code?
// don't repeat yourself, the goal is to eliminate reduncianes. you want to be able to change code in one place. we have used this in javascript

//2. const, let, and var difference.  they all define a variable, const: constant and not going to change, let - changable, allows to increase, var = declares a variable, but not commonly used.

//SECTION 2: boolean expression
const a = 4
const b = 53
const c = 57
const d = 16
const e = 'Kelvin'
const f = false
let g = 0


if ( a === b) {
    console.log("true");
 } else {
    console.log("false");
 }

 
 
if (a < b) {
    if (b > c) {
        console.log("b is the biggest number");
    }
    else if (c > b) {
        console.log("c is greater");
    }
}


//e _'kevin'
if (e === 'kevin') {
    console.log("true");
} else {
    console.log("false");
}

if (48 === "48") {
    console.log("true");
} else {
    console.log("false");
}

// how to add numbers to a var 

g = b + c; 
console.log(g);

// answer: console.log(g); using let, because it allows us to add values to it

// SECTION 3: while loops 
//answer: infinite loop - yes, because while it is true, it will keep running
//answer: i don't think it would run infinitely, because it was declared as false 
//answer: 

//defining A
let letters = 'A'

//defining i 
let i = 0

//start a while loop that will go only if i is under 20 
while (i < 20) {
    // will add a letter to A
  letters += 'A'
  // will add 1 to the value of i 
  i++
}
// will print out all the letters at the end. 
console.log(letters)

//expected results: this will print A, as many times as i will be less than 20 


//  

// section 4: for loops

//answer the first part: is defining the variable
//second part: as long as i is within the parameter, it will execute
//third part: it adds to variable during each loop what you do each time 
for (let i = 0; i < 100; i++) {
    console.log(i)
  }
  

for (let i = 999; i >= 0; i--) {
    console.log(i)
  }


for (let i = 1; i <=10; i++){
    console.log("The value of i is: " + i + " of 10" )
}

// terminal practice

  

