let gameNum =45;
let userNum = prompt("Guess the game number : ");
console.log(userNum);
while(userNum != gameNum){
     userNum = prompt("You entered wrong number. Guess again");
}
    console.log("Congratulations you won the game!");
