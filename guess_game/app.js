const random = Math.round(Math.random() * 100);
console.log(random);
let num;
let counter = 0;
do {
    counter++;

    if (counter <= 5) {
        num = +prompt(`Guess the number I've kept, your ${counter}. trial`);

        if (random === num) {
            alert(`Awesome! You got it!, it was ${random}`);
        }else {
            console.log("Sorry, try again");
            if (random > num) {
                alert("Bigger please");
            } else if (random < num) {
                alert("Smaller please");
            }
        }else {
            alert("sorry , next time..");
            let statusControl = prompt("go on? (Y/N)")
            if(statusControl == `Y`){
                counter = 0
            }
            console.log("sorry , next time..");
            break
        }

    }

    } while (random !== num);
