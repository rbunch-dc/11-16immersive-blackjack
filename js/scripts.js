//----------------------
// ----GLOBALS----------
//----------------------
var theDeck = createDeck();
var playersHand = [] //player1Squares in tictactoe
var dealersHand = [] //player2Squares in tictactoe
// var topOfDeck = 4; Could use without shift 

$(document).ready(function(){

	$('.deal-button').click(function(){
		//Deal stuff goes in here
		shuffleDeck(); //Deck is now shuffled!
		// Update player array and DOM
		//Use shift to remove the top card from the deck.
		// Shift returns the element removed, so push .shift() onto the hand

		playersHand.push(theDeck.shift()); //2d
		dealersHand.push(theDeck.shift()); //3d
		playersHand.push(theDeck.shift()); //4d
		dealersHand.push(theDeck.shift());

		placeCard('player',1,playersHand[0]);
		placeCard('player',2,playersHand[1]);

		// Update dealer array and DOM
		placeCard('dealer',1,dealersHand[0]);
		placeCard('dealer',2,dealersHand[1]);

		calculateTotal(playersHand,'player');
		calculateTotal(dealersHand,'dealer');

	});

	$('.hit-button').click(function(){
		//Hit stuff goes in here
		// add a card to the JS and the DOM
		playersHand.push(theDeck.shift());
		var slotForNewCard = playersHand.length;
		console.log(playersHand.length)

		var lastCardIndex = playersHand.length-1;
		placeCard('player',slotForNewCard,playersHand[lastCardIndex]);
		// update the total
		calculateTotal(playersHand, 'player');




		// if(playersHand.length == 2){

		// }
	});

	$('.stand-button').click(function(){
		// stand stuff goes in here
	});
});

function createDeck(){
	var newDeck = [];
	var suits = ['h','s','d','c'];
	//suits/outter loop
	for(let s = 0; s < suits.length; s++){ 
		// card values/inner loop
		for(let c = 1; c <= 13; c++){
			newDeck.push(c+suits[s]);
		}
	}
	return newDeck;
}

function shuffleDeck(){
	for(let i = 0; i < 9001; i++){
		var random1 = Math.floor(Math.random() * theDeck.length);
		var random2 = Math.floor(Math.random() * theDeck.length);

		// switch theDeck[random1] with theDeck[random2]
		// store the value of theDeck[random1]
		var temp = theDeck[random1];

		// overwrite theDeck[random1] with theDeck[random2]
		theDeck[random1] = theDeck[random2];

		// overwrite theDeck[random2] with the temp (what used to be in random1)
		theDeck[random2] = temp;
	}
	console.log(theDeck);		
}

function placeCard(who, where, whatCard){
	var classSelector = '.' + who + '-cards .card-' + where;
						// '.' + 'player' + '-cards .card-' + 'one'
						// '.player-cards .card-one'
	$(classSelector).html('<img src="images/' + whatCard + '.png">');
	// $('.player-cards .card-one').html('<img src="cards/2d.png">')
}

function calculateTotal(hand, who){
	var total = 0; // init total to 0
	var cardValue = 0 // temp var for value of current card
	for(let i = 0; i < hand.length; i++){
		//Handle the face cards!
		cardValue = Number(hand[i].slice(0,-1)); //start at 0 and copy until the last index
		if(cardValue > 10){
			cardValue = 10;
		}
		total += cardValue;
	}
	// Update the DOM with the new total
	var classSelector = '.'+who+'-total-number';
	$(classSelector).text(total);
}