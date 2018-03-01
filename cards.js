

var cardNum = ["Ace","2","3","4","5","6","7","8","9","10","Jack","Queen","King"];
var cardShape = ["Clubs","Spades","Hearts","Diamonds"];

function Player(name){
	this.name = name;
	this.card1 = playCard();
	this.card2 = playCard();
	this.card3 = playCard();
}

function playCard(){
	return(cardNum[Math.floor(Math.random()*cardNum.length)] +" of "+ cardShape[Math.floor(Math.random()*cardShape.length)]);

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




