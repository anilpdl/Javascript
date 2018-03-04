var cardValue = ["2","3","4","5","6","7","8","9","10","Jack","Queen","King","Ace"];	// Array of Card Number
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

		for(var i=0;i<cardSuit.length;i++){
			for(var j=0;j<cardValue.length;j++){
				this.cards.push(new Card(j+1,cardValue[j],cardSuit[i]));
			}
		}


	}
}

 class Card{
 	constructor(cardValue,faceValue,suit){
 		this.cardValue = cardValue;
 		this.faceValue = faceValue;
 		this.suit = suit;
 	}
 }

 var myDeck = new Deck();
 console.log(myDeck);

let teenPatti = new Game('TeenPatti');
teenPatti.start(3);