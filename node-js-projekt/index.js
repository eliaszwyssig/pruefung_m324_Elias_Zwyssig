const chalk = require('chalk');


console.log(chalk.red('It works not'));


const myUnusedVariable = 42; // Fehler behoben: Verwende const, da die Variable nie verändert wird.

if (myUnusedVariable === 42) { // Fehler behoben: Verwende strikte Gleichheit (===)
  console.log('This is strictly equal!');
}


