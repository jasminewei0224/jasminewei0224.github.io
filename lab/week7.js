var myArray = ["apple","orange","grapes"];

var myOtherArray = [33, 31, 54, myArray];

var myOtherOtherArray = ["orange", 43, true, ["second list"]];

myArray.push("strawberries"); //adding new value to myArray

console.log(myArray[0])

var myContainer = document.getElementById("container");

//while loop(similar to if statement- runs ones) while-continous

var counter = 0;

while(counter < myArray.length){
	//do sth w/ our array
	var myListItem = document.createElement("li");
	myListItem.innerHTML = myArray[counter];
	myContainer.appendChild(myListItem);
	counter++; // is the same as counter = counter +1;
}

for(var i = 0; i < Things.length; i++){
	var myListItem = document.createElement("li");
	myListItem.innerHTML = myArray[counter];
	myContainer.appendChild(myListItem);
}