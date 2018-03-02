

var cardNum = ["Ace","2","3","4","5","6","7","8","9","10","Jack","Queen","King"];	// Array of Card Number
var cardShape = ["Clubs","Spades","Hearts","Diamonds"];								//Array of Card Shape
var cardDist=[];						//Array of card deck
var k=0;

for(var i=0;i<cardNum.length;i++){
	for(var j=0;j<cardShape.length;j++){
		cardDist[k]= cardNum[i]+" of "+cardShape[j];		
		k++;
	}
}




function Player(name){
	this.name = name;
	this.card1 = playCard();
	this.card2 = playCard();
	this.card3 = playCard();
}

function playCard(){
	var arrayNum = Math.floor(Math.random()*cardDist.length);
	var card = cardDist[arrayNum];
	cardDist.splice(arrayNum,1);
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
