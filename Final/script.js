// Parker Story 12/9/2025

/* actual math area 
this is where the number is asigned
*/
//Prompts to get the number
let ME = Number(prompt("Insert Monthly Income"))

let E = Number(prompt("Insert total expenses"))
//Function for final total
function TE(ME,E) {
    return ME - E; // gets total monthly income and subtracts the expenses
}
let FE = TE(ME,E)
console.log(FE) // logs number

/* Const to get doc ID'S
this is so we can assign indivual colors to a doc based on the id area to change it
*/

let MT = document.getElementById("MEtext");
//
let ET = document.getElementById("Etext");

let FT = document.getElementById("FEtext")

let body= document.getElementById("Body")

/* DOM AREA Bellow
This is where the css is manipulated based on the number you have
if its positve its green and neagetive red 
*/
if (FE >= 0) {
MT.textContent = "Your total monthly income is" + " " + ME;
MT.style.backgroundColor = ' #088F8F'
// ;
FT.textContent = "Your final income total is" + " " + FE;
FT.style.backgroundColor = ' #088F8F'
//
ET.textContent = "Your total Expenses is" + " " + E;
ET.style.backgroundColor = ' #088F8F'
//
body.style.backgroundColor = '#FFD700'
body.style.textAlign = "center"
"center"
} else {
MT.textContent = "Your total income is" + " " + ME;
MT.style.backgroundColor = '#ADEBB3'
// 
FT.textContent = "Your total income is" + " " + FE;
FT.style.backgroundColor = '#ADEBB3'
//
ET.textContent = "Your total Expenses is" + " " + E;
ET.style.backgroundColor = '#ADEBB3'
body.style.backgroundColor = '#da3c07ff'
body.style.textAlign = "center"

}

/* event area + logical op
this is used to make it where the button changes color based on the FE
*/
//  event that changes text 
const B = document.getElementById("B")
if ( FE>= 0) {
    B.style.backgroundColor = ' #088F8F'
} else if (FE<0) {
    B.style.backgroundColor ='#ADEBB3'
}

function changeText(event) {
    event.target.textContent = "Hello there";
}
B.addEventListener("click", changeText);
//
const date = document.getElementById("W");

const options = {
    month:"long",
    day:"numeric",
    year:"numeric",
}

date.textContent = "Today is" + " " + new Date().toLocaleDateString(undefined,options)
// this was used to get log whatever you get so if its positive you can also check it was positve in the console 
if (FE>0 && true ) {
    console.log("your in the positive")
} else if (FE<0 && true) {
    console.log("In the neagitive ")
}