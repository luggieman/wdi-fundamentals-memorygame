
var cardOne = "queen";
var cardTwo = "king";
var cardThree = "queen";
var cardFour = "king";

//if (cardTwo === cardFour) {
	//alert("You found a match!");
//}
//else if (cardTwo !== cardFour) {
	//alert("Sorry, try again");
//}


for (var i = 0; i < 4; i++) {
  var card = document.createElement('div');
  card.className = 'card';
  card.appendChild(document.createTextNode("New Card"));
  document.getElementById("game-board")
  .appendChild(card);
}

function createBoard () {
	for (var i = 0; i < 4; i++) {
  var card = document.createElement('div');
  card.className = 'card';
  card.appendChild(document.createTextNode("New Card"));
  document.getElementById("game-board")
  .appendChild(card);
	}
}
