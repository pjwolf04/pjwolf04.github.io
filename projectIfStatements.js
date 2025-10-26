let Answer = Number(prompt("How much did you spend?"));
let confNum = confirm(`was ${Answer}$ your total?`)
let discount 

if(Answer  >100) {discount = "20% off"}
else if (Answer >=50) {discount = "10% off"}
else if (Answer <50) { discount = "No discount"}
alert(discount)
