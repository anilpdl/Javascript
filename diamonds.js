/* Write a program which has an array of diamonds with different value e.g. [1,2,3,4,5]. 
The program should distribute the diamonds equally to 3 people. For example: Person 1: 1,4 Person 2: 2,3 Person 3: 5 
There may be any number of diamonds with any value. If diamonds cannot be equally distributed(e.g [1,2,3,4]), 
the program should print message “Cannot distribute equally to 3 people”. */

var diamonds = [2,4,5,3,1,6,6];
var total=0;
var i;
var remove;
var currentPerson=1;


for(i=0; i<diamonds.length;i++){
	total= total+diamonds[i];
}

if(total%3!=0){
	console.log("Cannot distribute equally to 3 people");
}
else{
	while(diamonds.length!=0){
	for(i=0; i<diamonds.length;i++){
		if(diamonds[0]==(1/3*total)){
			console.log("Person"+ currentPerson+":"+diamonds[0]);
			currentPerson++;
			remove=1;
			break;
		}
		else if((diamonds[0]+diamonds[i])==(1/3*total)){
			console.log("Person"+ currentPerson+":"+diamonds[0]+","+diamonds[i]);
			currentPerson++;
			remove=0;
			break;
		}
	}
	if(remove==1){
		
		diamonds.splice(0,1);
	}
	else{
		diamonds.splice(i,1);
	diamonds.splice(0,1);
	}
}

}