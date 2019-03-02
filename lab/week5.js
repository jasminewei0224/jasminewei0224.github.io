
//basic variable
var myString = "hello this is a string";
var myNumber = 20;
var myBoolean = false;
var letterSpacingValue = 1;

console.log(myString+ +myString)
console.log(myNumber+myNumber)
console.log(myBoolean+myString)
console.log(myString, myNumber, myBoolean)

//getting a div via its id:
var myDiv = document.getElementById("wrapper");
var colorDiv = document.getElementById("colorDiv");
//console.log(myDiv)

//functin

var myFunction = function(){
	

	if(myBoolean == true){
		myBoolean = false;
		myNumber = myNumber + 10;

		
		
	}else{
		myBoolean = true;
		myNumber = myNumber - 8;
	}
	console.log(myNumber )
	myDiv.style.fontSize = myNumber + "px";
}



var anotherFunction = function(){

	if(myNumber < 40){

		//keep growing

		myNumber = myNumber + 2;

	}else if(myNumber == 40){

		myNumber = myNumber +30;

	}else{
		// reset at the small value

		myNumber = 20;
	}

	myDiv.style.fontSize = myNumber + "px";

}

var classFunction = function(){
	console.log("hey")

	colorDiv.classList.toggle("text-color")
	myDiv.classList.toggle("text-color")
}

myDiv.onclick = anotherFunction;
colorDiv.onclick = classFunction;