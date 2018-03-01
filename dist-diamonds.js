/* Write a program which has an array of diamonds with different value e.g. [1,2,3,4,5]. 
The program should distribute the diamonds equally to 3 people. For example: Person 1: 1,4 Person 2: 2,3 Person 3: 5 
There may be any number of diamonds with any value. If diamonds cannot be equally distributed(e.g [1,2,3,4]), 
the program should print message “Cannot distribute equally to 3 people”. */



var diamonds = [1,1,1,1,1,1,1,2,2,1];
var itemsToSplice = [];  //For storing values that are to be distributed
var total=0, personNum=3,diamondSum=0,currentPerson=1;
var getDiamondNum = ":";	// For printing distributed value


for(var i=0;i<diamonds.length;i++){
	total=total+diamonds[i];		//Total array values
}

if(total%personNum!=0){
	console.log("Cannot distribute equally to "+personNum+" people");
	return;
}

diamonds.sort();			//Sorts array values low-high
diamonds.reverse();			// Reverse array values

for(i=0;i<diamonds.length;i++){
	diamondSum = diamondSum + diamonds[i];		
	itemsToSplice.push(i);				// Pushes the value added in diamondSum to last index of itemsToSplice


	if(diamondSum==total/personNum){

		for(var j=0;j<itemsToSplice.length;j++){
			getDiamondNum = getDiamondNum +" "+diamonds[itemsToSplice[j]];	//Concat the distributed value as string	 
		}

		console.log("Person"+currentPerson+getDiamondNum);

		for(var j=itemsToSplice.length-1;j>=0;j--){
			diamonds.splice(itemsToSplice[j],1);		// Remove array values that has been distributed	
		}	

		currentPerson++;
		//Reset values
		getDiamondNum=":";			
		diamondSum=0;
		itemsToSplice=[];
		i=-1;
	}


	if(diamondSum>total/personNum){
		diamondSum=diamondSum-diamonds[i];	//Subtracts the value that add up to value grater than the mean
		itemsToSplice.pop();				// Removes the value from last index of itemsToSplice;
	}
}
