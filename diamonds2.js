/* Write a program which has an array of diamonds with different value e.g. [1,2,3,4,5]. 
The program should distribute the diamonds equally to 3 people. For example: Person 1: 1,4 Person 2: 2,3 Person 3: 5 
There may be any number of diamonds with any value. If diamonds cannot be equally distributed(e.g [1,2,3,4]), 
the program should print message “Cannot distribute equally to 3 people”. */

var diamonds=[1,2,3,4,5,6,9];
var total=0, NumPerson=3;



for(var i=0; i<diamonds.length;i++){
	total=total+diamonds[i];
}

if(total%NumPerson==0){
	while(diamonds.length!=0){

	for(i=0;i<diamonds.length;i++){
		if(diamonds[0]+diamonds[i]==total/NumPerson){
			console.log(diamonds[0]+","+diamonds[i]);
			diamonds.splice(i,1);
			diamonds.splice(0,1);
		}
		if(diamonds.length==1){
			console.log(diamonds[0]);
			diamonds.splice(0,1);
		}
	}
	}
}

else{
	console.log("Cannot distribute equally to 3 people");
}
