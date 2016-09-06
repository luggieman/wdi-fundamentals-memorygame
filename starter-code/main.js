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
    document.getElementById("game-board").appendChild(card);
}
var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

function createBoard() {
        for (var i = 0; i < 4; i++) {
            var card = document.createElement('div');
            card.className = 'card';
            card.appendChild(document.createTextNode("New Card"));
            document.getElementById("game-board").appendChild(card);
        }
        for (var i = 0; i < cards.length; i++) {
            cardElement.setAttribute('king', cards[i]);
            cardElement.setAttribute('queen', cards[i]);
            board.appendChild(cardElement);
    		board.appendChild(cardElement);
        }
        for (var i = 0; i < cards.length; i++) {
            cardElement.addEventListener('click', isTwoCards)
        }

        function isTwoCards() {
            cardsInPlay.push(this.getAttribute('data-card'));
            if (cardsInPlay.length === 2) {
                isMatch(cardsInPlay);
                cardsInPlay = [];
            }

          }
      }
        