let x = Math.ceil(Math.random() * 6);
alert("Welcome to Number guessing game")
corrGuess = 1;
for (let i = 0; i < 10; i++) {
    let guess = prompt("Guess the number");
    
    if (guess == x) {
        alert("Congratulations you Guessed " + corrGuess+" correct ans")
        corrGuess++;
    }
    else{
        alert("Your guess was wrong,Try again!")
    }
}
alert("Congratulations you Guessed " + corrGuess + " correct ans")
