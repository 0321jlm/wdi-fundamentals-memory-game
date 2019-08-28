


var cards = ["queen", "queen", "king", "king"];

var cardsInPlay = [];

function checkForMatch() {

	if(cardsInPlay[0] === cardsInPlay[1]){
		console.log("You found a match!");
	} else {
		console.log("Sorry. try again.");
	} 
}	

function flipCard(cardID) {
     console.log ("User flipped " + cards[cardID]);
     cardsInPlay.push(cards[cardID]);

     
}
     	flipCard(0);
		flipCard(1);
		checkForMatch();

