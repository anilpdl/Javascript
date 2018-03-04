

var cardLabel = ["Ace","2","3","4","5","6","7","8","9","10","Jack","Queen","King"];	// Array of Card Number
var cardSuit = ["Clubs","Spades","Hearts","Diamonds"];								//Array of Card Suits
var cardDeck=[];						//Array of card deck
var k=0;

for(var i=0;i<cardLabel.length;i++){
	for(var j=0;j<cardSuit.length;j++){
		cardDeck.push(cardObj(i,j));	
	}
}

function cardObj(x,y){
	return(cardLabel[x]+" of "+cardSuit[y]);
}




function Player(name){
	this.name = name;
	this.card1 = playCard();
	this.card2 = playCard();
	this.card3 = playCard();
}

function playCard(){
	var arrayNum = Math.floor(Math.random()*cardDeck.length);
	var card = cardDeck[arrayNum];
	cardDeck.splice(arrayNum,1);
	return card;

}

function displayCard(player){
	console.log(player.name+":"+player.card1+","+player.card2+","+player.card3);

}

var player1 = new Player("Player 1");
var player2 = new Player("Player 2");
var player3 = new Player("Player 3");


displayCard(player1);
displayCard(player2);
displayCard(player3);

console.log(cardDeck[42].lastIndexOf(" "));
