//Variables to display the points of each player
let computerPointsDisplay =
	document.getElementsByClassName('computer-points')[0];

let userPointsDisplay = document.getElementsByClassName('user-points')[0];

//Variables for the weapons selection

const rockBlock = document.getElementsByClassName('rock-w')[0];
const paperBlock = document.getElementsByClassName('paper-w')[0];
const scissorsBlock = document.getElementsByClassName('scissors-w')[0];

let weaponToNumber = undefined;

const text = document.getElementsByClassName('text')[0];
const userWinner = 'You win!';
const computerWinner = 'You lose! - Computer wins!';
let myWeaponToNumber = undefined;

//Variables to initialize the points of each player
let points_of_computer = 0;
let points_of_user = 0;

//Reset Button
const reset = document.getElementsByClassName('again')[0];
