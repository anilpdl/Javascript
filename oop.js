/*Write a card game using OOP concept that takes number of players as input. Each player will be dealt 3 random cards which should be displayed as follows:
Player 1: 3 of Hearts, 2 of Clubs, Jack of Spades 
Player 2: ...
Player 3: ...
Bonus: Display who won the game
Player X won!
Tips: Make a card class and player class*/


var cardValue = ["2","3","4","5","6","7","8","9","10","Jack","Queen","King","Ace"];	// Array of Card Number
var cardSuit = ["Clubs","Spades","Hearts","Diamonds"];		// Array of card suits

class Card{
	constructor(cardValue,faceValue,suit){			//Creates a card with value, facevalue and suit
		this.cardValue = cardValue;
		this.faceValue = faceValue;
		this.suit = suit;
	}

	display(){									//Creates string of card values
		return `${this.faceValue} of ${this.suit}`;
	}
}	
class Deck{

	constructor(){
		this.cards = [];				//Array of distributed cards
	this._prepareDeck();				//Function call for deck preparation
}

	distribute(noOfPlayers, noOfCards){			//For Distributing card to players 
		var players= [];							// Temp stores distributed cards		
		var hand;
		for(var j=0;j<noOfPlayers;j++){
			hand = [];													//Temp stores each card distributed
			for(var i=0;i<noOfCards;i++){
				var temp = Math.floor(Math.random()*this.cards.length);	//Selects random card to distribute
				hand.push(this.cards[temp]);							//Stores the selected card in hand array
				this.cards.splice(temp,1);							//Removes the selected card from deck
			}
			players.push(hand)				//Stores the hand array as object in players array
		}
		return players;						//returns the distributed cards array when called
	}

	_prepareDeck(){
		for(var i=0;i<cardSuit.length;i++){
			for(var j=0;j<cardValue.length;j++){
				this.cards.push(new Card(j+1,cardValue[j],cardSuit[i]));	//Creates a card and pushes it to cards array
			}
		}

	}

}

var myDeck = new Deck();			//Create a new deck object
class Game {
	
	constructor(gameName){
		this.players = [];
		this.gameName= gameName;
		
	}

	start(numOfPlayers){					//Method for starting game
		const numOfCardsToDistribute = 3;
		this.players= this._createPlayers(numOfPlayers);									//Create players using method
		var distributedCards = myDeck.distribute(numOfPlayers, numOfCardsToDistribute);		//Passes the no of player and cards to be assigned
		this._assignCardsToPlayers(distributedCards);			// Passes the distributed cards array to method
		var result = this.checkHandStrengthValue(this.players);			//Checking hand strength
		var winner = this.checkWinner(result);
						//Checking winner
		this.displayWinner(winner);
		

	}


	_createPlayers(numOfPlayers){
		let players = []
		for(var i=0;i<numOfPlayers;i++){					//Creates the required no of players
			players.push(new Player(`Player${i+1}`));		//String interpolation
		};
		return players;										// Returns the array of created Players
	}

	_assignCardsToPlayers(cardsToDistribute){
		let numOfPlayers = this.players.length;				//No of game players
		for(var i=0;i<numOfPlayers;i++){
			this.players[i].setHand(cardsToDistribute[i]);	//Passes the distributed cards to players
			this.players[i].display();						//Displays the cards received by players
		}
	}

	checkHandStrengthValue(players){
		let assignedCardsStrengthValues = [];
		let valueOfCards = [];
		let suitOfCards = [];
		for(var i=0;i<players.length;i++){
			valueOfCards = [];
			suitOfCards = [];
			for(var j =0;j<3;j++){
				valueOfCards.push(players[i].hand[j].cardValue);
				suitOfCards.push(players[i].hand[j].suit);

				}
		assignedCardsStrengthValues.push(this._assignedCardsStrength(valueOfCards,suitOfCards));
	}
	return assignedCardsStrengthValues;
	 	

	}

	cardValuesSort(sortValues){
		var numSort = function (a, b) {
    	return a-b;
			}
		return 	(sortValues.sort(numSort));
	}

	_assignedCardsStrength(playerHandCardsValue,playerHandCardsSuit){
		
		playerHandCardsValue =  this.cardValuesSort(playerHandCardsValue);
		
		
		
	var playerHandCardsValueSubtract = playerHandCardsValue[2]-1;
	var playerHandCardsValueAdd = playerHandCardsValue[0]+1;
	


	if(playerHandCardsValueSubtract<0){
		playerHandCardsValueSubtract=13;
	}

	if(playerHandCardsValueAdd>13){
		playerHandCardsValueAdd=0;
	}


	if((playerHandCardsValue[0]==playerHandCardsValue[1])&&(playerHandCardsValue[1]==playerHandCardsValue[2])){
		return 5;				//if trail returns value 5

	}

	
	else if(((playerHandCardsValueAdd==playerHandCardsValue[1])&&(playerHandCardsValue[1]==playerHandCardsValueSubtract))||(playerHandCardsValue[0]==1&&playerHandCardsValue[1]==2&&playerHandCardsValue[2]==13)){
		if((playerHandCardsSuit[0]==playerHandCardsSuit[1])&&(playerHandCardsSuit[0]==playerHandCardsSuit[2])){
			return 4;					//if straight flush returns value 4

		}
		else{
		return 3;						//if straight returns value 3
	}
	}

	else if((playerHandCardsSuit[0]==playerHandCardsSuit[1])&&(playerHandCardsSuit[0]==playerHandCardsSuit[2])){
		return 2;					//if flush, returns value 2
		

	}

	else if((playerHandCardsValue[0]==playerHandCardsValue[1])||(playerHandCardsValue[1]==playerHandCardsValue[2])||(playerHandCardsValue[0]==playerHandCardsValue[2])){
		return 1;					//if pair, returns value 1


	}

	else{
		return 0;					//if high card, returns value 0

	}
	}

	 _maxValuePlayerIndex(arr) {
			var largest = Math.max.apply(Math, arr);

			var indexes = [], i = -1;
			while ((i = arr.indexOf(largest, i+1)) != -1){
				indexes.push(i);
			}
			return indexes;
		}

	checkWinner(results){
		var indexOfMaxValue = [];
		
		indexOfMaxValue=(this._maxValuePlayerIndex(results));
		if(indexOfMaxValue.length==1){
			return indexOfMaxValue;
		}

//ERROR CHECK---------------------------------------------------------------------------------------------------

		for(var i=0;i<indexOfMaxValue.length-1;i++){
			
			if(indexOfMaxValue.length==1){
					return indexOfMaxValue;
				}
			var compareResult = this.equalResultsCardcompare(indexOfMaxValue[i+1],indexOfMaxValue[i]);
			if(compareResult==-1){
				indexOfMaxValue.splice(i,1);
				i--;
			}
			else if(compareResult== 1){
				indexOfMaxValue.splice(i+1,1);
				i--;
			}
		}
		return indexOfMaxValue;
	}

	equalResultsCardcompare(x,y){
		var valueOfCardsOfx = [];
		var valueOfCardsOfy	= [];
		
			for(var j =0;j<3;j++){
				valueOfCardsOfx.push(this.players[x].hand[j].cardValue);
				valueOfCardsOfy.push(this.players[y].hand[j].cardValue);
				}
			valueOfCardsOfx = this.cardValuesSort(valueOfCardsOfx);
			valueOfCardsOfy = this.cardValuesSort(valueOfCardsOfy);

			for(var i =3;i>=0;i--){
			if((valueOfCardsOfx[i])>(valueOfCardsOfy[i])){
				return -1;
			}
			else if((valueOfCardsOfx[i])<(valueOfCardsOfy[i])){
				return 1;
			}
			if(i==0){
				return 0;
			}
		}
	}

//ERROR CHECK---------------------------------------------------------------------------------------------->


		
	

	displayWinner(winplayer){
		for(var i=0;i<winplayer.length;i++){
			console.log("Winner:" + this.players[winplayer[i]].name);
		}
	}
}

class Player{
	constructor(nameOfPlayer){
		this.name = nameOfPlayer;
		this.hand = [];
	}

	setHand(cards){
		this.hand = cards;
	}

	display(){
		var cardsToDisplay = "";
		for(var i=0;i<(this.hand).length;i++){
			cardsToDisplay += this.hand[i].display()+ ', ' ;			//Passes the values to create card stringValue
		}
		console.log(this.name +": " + cardsToDisplay);					//Displays card values
	}
}



let teenPatti = new Game('TeenPatti');
teenPatti.start(3);

