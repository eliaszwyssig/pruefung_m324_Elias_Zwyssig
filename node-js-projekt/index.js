const chalk = require('chalk');

console.log(chalk.red('It works'));

let myUnusedVariable = 42; // Verletzung von 'prefer-const' und 'no-unused-vars'

if (myUnusedVariable == '42') { // Verletzung von 'eqeqeq'
  console.log('This is not strictly equal!');
}

