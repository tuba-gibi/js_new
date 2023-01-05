let numberr = +prompt(`Please enter a number`);
if (numberr > 0) {
  alert(`${numberr} is positive`);
}else if (numberr < 0) {
  alert(`${numberr} is negative`);
}else if (numberr === 0) {
  alert(`It is zero`);
}else{
  alert(`It's not a number.Please enter a number`);
}alert