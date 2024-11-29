// DENOTIONG VALUES TO VARIABLES
let firstName ="Bill";
let secondName ="Walker";

console.log(firstName, '\n', secondName);


// USING THE IF,ELSE IF AND ELSE STATEMENTS
let age = 18;

if (age>=18) {
    console.log("you are eligible ");
    }
else{
console.log('not eligigble');
}

// TAKING INPUTS 
prompt("enter your name")
let firstNr = Number(prompt("enter the first number: "));
let secondNr = Number(prompt("enter the second number: "));

let total = firstNr + secondNr;
alert(total);
console.log(total);

// ASSINGNMENT-1
// http, status code, http method (get, post, delete, patch)
// The Hypertext Transfer Protocol (HTTP) is the foundation of the World Wide Web, and is used to load webpages using hypertext links. HTTP is an application layer protocol designed to transfer information between networked devices and runs on top of other layers of the network protocol stack.

// http status code 
// is a set of instruction that confirms a user requst been successfully acheive.
// however, there are these numbers that tells a user about the data been requested, i.e 404 not found, 400 bad request and due to an interruption a request was not successfully requsted.

invalid gender
let genderName = prompt("Enter your gender: ").toLowerCase()

if (genderName === 'male') {
    console.log("Male gender recognized!")
}else if(genderName === 'female'){
    console.log("Female gender recognized!")
}
else {
    console.log("Invalid gender")
}