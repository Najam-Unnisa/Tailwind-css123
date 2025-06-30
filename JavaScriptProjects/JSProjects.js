
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

    let deposit = prompt("enter the amount you want to deposit");
    let deposit1 = parseInt(deposit);
    console.log(`the user deposit is ${deposit1}`);

    console.log(`the user balance after deposit is ${balance2 + deposit1}`);

    const exit = alert("thank you for using our atm");
}

// atmStimulator()

function game() {
    let score = 0
    let list = ["rock", "paper", "scissors"];
    for (let index = 0; index < 3; index++) {
        let userChoice = prompt("enter your choice");
        let comp = list[Math.floor(Math.random() * list.length)];
        console.log(`the computer input is ${comp}`);
        console.log(`the user input is ${userChoice}`);
        if (userChoice == comp) {
            console.log("its a tie");
        } else if (userChoice == "rock" && comp == "scissors") {
            console.log("the user wins");
            score++;
        } else if (userChoice == "paper" && comp == "rock") {
            console.log("the user wins");
            score++;
        } else if (userChoice == "scissors" && comp == "paper") {

            console.log("the user wins");
            score++;
        } else {
            console.log("the computer wins");
        }
        console.log(`the user score is ${score}`);



    }

    if (score >= 2) {
        alert("you win the game");
    }
}

// game()

let todoList = []

function addTodo() {
    let newTodo = prompt("enter new todo");

    todoList.push(newTodo);
    console.log(todoList);
}

function removeTodo() {

    let index = parseInt(prompt("enter the index of the todo you want to remove")) - 1;
    if (index >= 0 && index <= todoList.length) {
        todoList.splice(index, 1);
        console.log(todoList)
    } else {
        alert("invalid index");
    }
}

function displayTodo() {
    console.log(todoList);


}
function exitTodo()
{
  alert("goodbye");
}

function main() {
    while (true) {
        const userChoice1 = prompt("do you want to add, remove, display or exit todo?");
        if (userChoice1 === "add") {
            addTodo();
        } else if (userChoice1 === "remove") {
            removeTodo();
        }
        else if (userChoice1 === "display") {
            displayTodo();
        }
        else if(userChoice1==="exit"){
            exitTodo();
        }
        else{
            alert("invalid input")
        }


    }
    
}

main()