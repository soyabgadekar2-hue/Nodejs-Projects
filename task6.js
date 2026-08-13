const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
    
rl.question("Enter your birth year: ", (year) => {
    let currentYear = new Date().getFullYear();
    let age = currentYear - Number(year); 
    
if (age > 0 && age <= 12) {
    console.log("You are Child.");
}else if (age >= 13 && age <=17) {
    console.log("You are Teenager.");
} else if (age >=18 && age <= 60) {
    console.log("You are Adult.");
} else {
    console.log("You are Senior Citizen.");
} 
rl.close();  
});

