//----------------------
// ----GLOBALS----------
//----------------------
var theDeck = createDeck();
var playersHand = [] //player1Squares in tictactoe
var dealersHand = [] //player2Squares in tictactoe

$(document).ready(function(){

	$('.deal-button').click(function(){
		//Deal stuff goes in here
		shuffleDeck(); //Deck is now shuffled!
		// Update player array and DOM
		playersHand.push(theDeck[0]);
		playersHand.push(theDeck[2]);

		placeCard('player','one',playersHand[0]);
		placeCard('player','two',playersHand[1]);

		// Update dealer array and DOM
		dealersHand.push(theDeck[1]);
		dealersHand.push(theDeck[3]);

		placeCard('dealer','one',dealersHand[0]);
		placeCard('dealer','two',dealersHand[1]);


	});

	$('.hit-button').click(function(){
		//Hit stuff goes in here
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