





// made a object 
const landscape = {
    name: "Var",
    wage: 1,
    wallet: 0, 
    jobsworked: 0

 }
 

 // named a function, set an argument 
const landscaping = (job) => {
    //make a for loop for the key = jobsworked, use dot notation (nameOfObject.jobsworked)
    for (i=0; i < landscape.jobsworked; i++){
        landscape.wallet += 1;
        
    }
    console.log(landscape.wallet)
 }
 
// called function and put object "landscape" as the argument 
 landscaping (landscape);


 