import inquirer from "inquirer";
console.log("Number guessing game, Let's guess a number between 1 to 10 in 3 tries");
let randNum = Math.floor(Math.random() * 10) + 1;
console.log("Rand Number is", randNum);
let actualAnswer = randNum;
let numTries = 3;
while (numTries > 0) {
    const answers = await inquirer.prompt([
        {
            name: "myGuess",
            message: "Input number",
            type: "number",
        },
    ]);
    console.log(answers);
    if (answers.myGuess == actualAnswer) {
        console.log("You have guessed it right!, Well done");
        numTries = 0;
    }
    else {
        console.log("You have guessed it wrong, try again!");
        if (actualAnswer > answers.myGuess)
            console.log("Think Higher");
        else {
            console.log("Think Lower ");
        }
        console.log(`You have ${numTries - 1} left`);
    }
    numTries--;
}
