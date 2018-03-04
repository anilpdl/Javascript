var cardLabel = ["2","3","4","5","6","7","8","9","10","Jack","Queen","King","Ace"];	// Array of Card Number
var cardSuit = ["Clubs","Spades","Hearts","Diamonds"];	

class Game {
	
	constructor(gameName){
		this.players = [];
		this.gameName= gameName;
	}

	start(numOfPlayers){
		for(var i=0;i<numOfPlayers;i++){
			this.players.push(new Player(`Player${i}`));			//String interpolation
		};


	}
}

class Player{
	constructor(nameOfPlayer){
		this.player = nameOfPlayer;
	}
}

class Deck{

	constructor(){
		this.cards = [];
		let suits = getSuites();
		let faceValues = getfaceValue();


	}
}

 class Card{
 	constructor(faceValue,suit){
 		this.faceValue = faceValue;
 		this.suit = suit;
 	}
 }

let teenPatti = new Game('TeenPatti');
teenPatti.start(3);