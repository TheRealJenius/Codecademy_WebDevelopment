let userName = '';
// Using Truthy Falsy and a ternary operator
userName?console.log(`Hello ${userName}!`):console.log('Hello there!');

let userQuestion = 'What should I wear tomorrow?';
console.log(userQuestion);

// Math.floor = rounds the number down to the nearest decimal
// Math.random = generates a random number between 0 to 1
// * 8 = will multiply the random decimal 
let randomNumber = Math.floor(Math.random() * 8);

let eightBall = '';

switch (randomNumber){
  case 1:
    eightBall = 'It is certain';
    break;
  case 2:
    eightBall = 'It is decidedly so';
    break;
  case 3:
    eightBall = 'Reply hazy try again';
    break;
  case 4:
    eightBall = 'Cannot predict now';
    break;
  case 5:
    eightBall = 'Do not count on it';
    break;
  case 6:
    eightBall = 'My sources say no';
    break;
  case 7:
    eightBall = 'Outlook not so good';
    break;
  case 8:
    eightBall = 'Signs point to yes';
    break;
  default: // in case it's 0
    eightBall = 'You do you';
    break;
}

console.log(eightBall);