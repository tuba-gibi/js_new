const n = +prompt(`How many numbers do you want to enter , I’ll take their average for you `)
  
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    let num = +prompt(`please enter  ${i}. number`);
    sum+=num;
  }
  let average;
  (average = Math.ceil(sum/n));
  
  alert(`Average of your numbers is : ${average}`);