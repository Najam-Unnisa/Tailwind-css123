
// even odd game

function isEvenOrOdd() {
  const sets = 3;
  let count = 0;
  const userChoice = confirm("Click ok for even and cancel for odd");

  for (let i = 0; i < sets; i++) {
    let num = prompt("enter a number");
    let num1 = parseInt(num);
    console.log(`the user input is ${num1}`);
    const comp = Math.round(Math.random() * 6);
    console.log(`the computer input is ${comp}`);

    const result = num1 + comp;
    result % 2 == 0 ? 'even' : 'odd';
    console.log(result);

    result == userChoice
      ? console.log(`the user wins `) && count++
      : console.log(`the computer wins`);
  }
  count >= 2
    ? alert(`the user wins the game`)
    : alert(`the computer wins the game`);
}

// isEvenOrOdd();


//ATM Stimulator

function atmStimulator() {

    let balance1 = prompt('enter your balance');
    let balance = parseInt(balance1);
       console.log(`the user balance is ${balance}`);
    let withdraw = prompt("enter the amount you want to withdraw");
    let withdraw1 = parseInt(withdraw);
    console.log(`the user withdraw is ${withdraw1}`);
    const balance2 = balance - withdraw1;
 
    console.log(`the user balance afer withdrawl is ${balance2}`);

    let deposit= prompt("enter the amount you want to deposit");
    let deposit1 = parseInt(deposit);
    console.log(`the user deposit is ${deposit1}`);
 
    console.log(`the user balance after deposit is ${balance2+deposit1}`);

const exit = alert ("thank you for using our atm");
}

// atmStimulator()

