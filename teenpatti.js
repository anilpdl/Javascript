

var cardLabel = ["2","3","4","5","6","7","8","9","10","Jack","Queen","King","Ace"];	// Array of Card Number
var cardSuit = ["Clubs","Spades","Hearts","Diamonds"];								//Array of Card Suits
var cards=[];						//Array of card deck


function card(value,suit,label){
	this.value= value;
	this.suit= suit;
	this.label= label;
}


function deck(){

	for(var i =0;i<cardSuit.length;i++){
		for(var j=0;j<cardLabel.length;j++){
			cards.push(new card(j+1,cardSuit[i],cardLabel[j]));
		}
	}
	return cards;
}

function player(name){
	this.name = name;
	this.card1= playcard();
	this.card2= playcard();
	this.card3 = playcard();
}

function playcard(){
	var cardNum = Math.floor(Math.random()*myDeck.length);
	var myCard  = myDeck[cardNum];
	myDeck.splice(cardNum,1);
	return(myCard);
}

function display(obj){
	console.log(obj.name+":"+obj.card1.label + " of " + obj.card1.suit+ "," 
		+obj.card2.label + " of " + obj.card2.suit+ ","
		+obj.card3.label + " of " + obj.card3.suit);
}

function chkCards(chk){
	var label = [chk.card1.value,chk.card2.value,chk.card3.value];
	var suit= [chk.card1.suit,chk.card2.suit,chk.card3.suit];
	
	label.sort();
	var labelSubtract = label[2]-1;
	var labelAdd = label[0]+1;
	


	if(labelSubtract<0){
		labelSubtract=13;
	}

	if(labelAdd>13){
		labelAdd=0;
	}


	if((label[0]==label[1])&&(label[1]==label[2])){
		return 5;				//if trail returns value 5

	}

	
	else if(((labelAdd==label[1])&&(label[1]==labelSubtract))||(label[0]==1&&label[1]==2&&label[2]==13)){
		if((suit[0]==suit[1])&&(suit[0]==suit[2])){
			return 4;					//if straight flush returns value 4

		}
		else{
		return 3;						//if straight returns value 3
	}
	}

	else if((suit[0]==suit[1])&&(suit[0]==suit[2])){
		return 2;					//if flush, returns value 2
		

	}

	else if((label[0]==label[1])||(label[1]==label[2])||(label[0]==label[2])){
		return 1;					//if pair, returns value 1


	}

	else{
		return 0;					//if high card, returns value 0

	}

}

var numSort = function (a, b) {
    return a-b;
}

function chkWinner(result1,result2,result3){

	var cardSet1 = [p1.card1.value,p1.card2.value,p1.card3.value];
	var cardSet2 = [p2.card1.value,p2.card2.value,p2.card3.value];
	var cardSet3 = [p3.card1.value,p3.card2.value,p3.card3.value];
	

	
	cardSet1.sort(numSort);
	cardSet2.sort(numSort);
	cardSet3.sort(numSort);
	
	
	if(result1>result2&&result1>result3){
			console.log("Winner:"+p1.name);
			return;
		}

	else if(result2>result1&&result2>result3){
			console.log("Winner:"+p2.name);
			return;
		}
	else if(result3>result1&&result3>result2){
			console.log("Winner:"+p3.name);
			return;
		}

	else if((result1==result2)&&(result2==result3)){
			for(var i=2;i>=0;i--){
				
					if((cardSet1[i]>cardSet2[i])&&(cardSet1[i]>cardSet3[i])){
						console.log("Winner:"+p1.name);
						return;
					}
					else if((cardSet2[i]>cardSet1[i])&&(cardSet2[i]>cardSet3[i])){
						console.log("Winner:"+p2.name);
						return;
					}
					else if((cardSet3[i]>cardSet1[i])&&(cardSet3[i]>cardSet2[i])){
						console.log("Winner:"+p3.name);
						return;
					}
					else if(i==0){
						console.log("No winners");
						return;
					}
					
					}
				
			}
	else if(result1==result2){
			for(var i=2;i>=0;i--){
					if(cardSet1[i]<cardSet2[i]){
						console.log("Winner:"+p2.name);
						return;
					}
					else if(cardSet1[i]>cardSet2[i]){
						console.log("Winner:"+p1.name);
						return;
					}
					else if(i==0){
						if(cardSet1[0]==cardSet2[0]){
							console.log("Draw:"+p1.name+" & "+p2.name);
							return;
						}
					}
				}
		}
	else if(result2==result3){
		for(var i=2;i>=0;i--){
				if(cardSet2[i]<cardSet3[i]){
					console.log("Winner:"+p3.name);
					return;
				}
				else if(cardSet2[i]>cardSet3[i]){
					console.log("Winner:"+p2.name);
					return;
				}
				else if(i==0){
					if(cardSet2[0]==cardSet3[0]){
					console.log("Draw:"+p2.name+" & "+p3.name);
					return;
					}
				}
			}
		}
	else if(result1==result3){
			for(var i=2;i>=0;i--){
					if(cardSet1[i]<cardSet3[i]){
						console.log("Winner:"+p3.name);
						return;
					}
					else if(cardSet1[i]>cardSet3[i]){
						console.log("Winner:"+p1.name);
						return;
					}
					else if(i==0){
						if(cardSet1[0]==cardSet3[0]){
							console.log("Draw:"+p1.name+" & "+p3.name);
							return;
						}
					}
				}
		}

		}


var myDeck = new deck();
var p1 = new player("Anil");
var p2 = new player("Kiran");
var p3 = new player("Ayush");



var result1= chkCards(p1);
var result2 = chkCards(p2);
var result3 = chkCards(p3);

display(p1);
display(p2);
display(p3);
chkWinner(result1,result2,result3);








