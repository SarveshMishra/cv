let dice1 = Math.floor(Math.random() * 6) + 1;

let dice2 = Math.floor(Math.random() * 6) + 1;

//console.log(dice1, dice2);
function refreshPage() {
	window.location.reload();
}

//Changing the dice images

if (dice1 === 1) {
	document.querySelector("#dice1").setAttribute("src", "images/dice1.png");
} else if (dice1 === 2) {
	document.querySelector("#dice1").setAttribute("src", "images/dice2.png");
} else if (dice1 === 3) {
	document.querySelector("#dice1").setAttribute("src", "images/dice3.png");
} else if (dice1 === 4) {
	document.querySelector("#dice1").setAttribute("src", "images/dice4.png");
} else if (dice1 === 5) {
	document.querySelector("#dice1").setAttribute("src", "images/dice5.png");
} else if (dice1 === 6) {
	document.querySelector("#dice1").setAttribute("src", "images/dice6.png");
}

if (dice2 === 1) {
	document.querySelector("#dice2").setAttribute("src", "images/dice1.png");
} else if (dice2 === 2) {
	document.querySelector("#dice2").setAttribute("src", "images/dice2.png");
} else if (dice2 === 3) {
	document.querySelector("#dice2").setAttribute("src", "images/dice3.png");
} else if (dice2 === 4) {
	document.querySelector("#dice2").setAttribute("src", "images/dice4.png");
} else if (dice2 === 5) {
	document.querySelector("#dice2").setAttribute("src", "images/dice5.png");
} else if (dice2 === 6) {
	document.querySelector("#dice2").setAttribute("src", "images/dice6.png");
}

// Changing the player name

if (dice1 > dice2) {
	document.querySelector(".win-text").innerHTML = "Player 1 🏁";
} else if (dice1 < dice2) {
	document.querySelector(".win-text").innerHTML = "Player 2 🏁";
} else {
	document.querySelector(".win-text").innerHTML = "🏁 Draw 🏁";
}
