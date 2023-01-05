// let numberr = +prompt(`Please enter a number`);
// if (numberr > 0) {
//   alert(`${numberr} is positive`);
// } else if (numberr < 0) {
//   alert(`${numberr} is negative`);
// } else if (numberr === 0) {
//   alert(`It is zero`);
// } else {
//   alert(`It's not a number.Please enter a number`);
// }

//***** BIGGEST NUMBER **** */

// let num1 = +prompt(`Please enter a number`);
// let num2 = +prompt(`Please enter another number`);
// let num3 = +prompt(`Please enter another number`);
// let biggest = num1;
// if (num2 > biggest) {
//   console.log(`${num2} is the biggest`);
// } else if (num3 > biggest) {
//   console.log(`${num3} is the biggest`);
// } else if (num1 > biggest) {
//   console.log(`${num1} is the biggest`);
// }else{
//     console.log("We have a problem :) Please try again.");
// }

//**SWITCH-CASE */

// let n1 = +prompt("Please enter a number");
// let opr = prompt("Please choose the operation +/-/ * / /");
// let n2 = +prompt("Please enter a number");
// let result;
// switch (opr) {
//   case `+`:
//     result = n1 + n2;
//     break;
//   case `-`:
//     result = n1 - n2;

//     break;
//   case `*`:
//     result = n1 * n2;

//     break;
//   case `/`:
//     result = n1 / n2;

//     break;

//   default:
//     // alert("Wrong entrance..")
//     break;
// }

// console.log(`Result is  ${result}`);

let speed = +prompt ( "What's your speed?")
console.log(speed < 90 ? "hızlan!" : speed > 120 ? "Yavaşla!" : "Süper");
