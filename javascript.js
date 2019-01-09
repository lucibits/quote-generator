//FIRST Choose quote generator set
var quoteGenerator1 = {
	amount: 1,

	generate: function() {
		var subject = ['Ok, thats good,', 'Perfect!', 'Your vibe is nice,', 'Words are good,', 'Attitudes define you'];
		var verb = ['but please', 'now go and', 'is priceless, but', 'but', 'and also...'];
		var directObject = ['calm down', 'help some old people', 'stay that way', 'show it', 'show some actions'];

		var quote = ""
		for (var i = 0; i<this.amount; i++) {
			//Randomly select a subject
			var randomSubject = subject[Math.floor(Math.random() * subject.length)];
			//Randomly select a verb
			var randomVerb = verb[Math.floor(Math.random() * verb.length)];
			//Randomly select a directObject
			var randomDirectObject = directObject[Math.floor(Math.random() * directObject.length)];

			//Concatenate random values into a string
			 quote += '<br>'+ randomSubject.concat(" ",randomVerb," ", randomDirectObject, "."); 
		}
		return quote
	}
};			

//SECOND How many / Get quotes
var quoteGenerator2 = {
	amount: 1,

	generate: function() {
		var subject = ['You know what?', 'Really?', 'Well,', 'Please', 'I figured.'];
		var verb = ['stay', 'nothing like', 'maybe', 'go and', 'Better'];
		var directObject = ['Ice-cream fix everything', 'lay down and cry alone...', 'go back in your own cacoon', 'work and turn it out', 'just stay bitter'];

		var quote = ""
		for (var i = 0; i<this.amount; i++) {
			//Randomly select a subject
			var randomSubject = subject[Math.floor(Math.random() * subject.length)];
			//Randomly select a verb
			var randomVerb = verb[Math.floor(Math.random() * verb.length)];
			//Randomly select a directObject
			var randomDirectObject = directObject[Math.floor(Math.random() * directObject.length)];

			//Concatenate random values into a string
			 quote += '<br>'+ randomSubject.concat(" ",randomVerb," ", randomDirectObject, "."); 
		}
		return quote
	}
};

function generateQuote() {
	//GET USERS CHOICE OF GENERATOR
	var userChoiceNode = document.getElementById("getQuoteSet");
	var userChoice = userChoiceNode.options[userChoiceNode.selectedIndex].value;
	console.log("userChoice",userChoice);

	//GET QUOTE NUMBER
	var getQuoteNumber = document.getElementById("getQuoteNumber");
	var userNumberChoice = getQuoteNumber.options[getQuoteNumber.selectedIndex].value;
	console.log("userNumberChoice", userNumberChoice);

	var insertQuote = document.getElementById("demo");
	if (userChoice === "quoteGenerator"){
		return;
	    } else if (userChoice === "quoteGenerator1"){
		//SET QUOTE AMOUNT
		quoteGenerator1.amount = userNumberChoice

		for (var i = 0; i<userNumberChoice; i++) {
			document.getElementById("demo").innerHTML = quoteGenerator1.generate();
		}

	} else {
		//SET QUOTE AMOUNT
		quoteGenerator2.amount = userNumberChoice

		for (var j = 0; j<userNumberChoice; j++) {
			document.getElementById("demo").innerHTML = quoteGenerator2.generate();
		}
	};
	
};

function onChangeQuote1(select) {
console.log(select.value);
	if (select.value === "quoteGenerator"){
		document.body.style.background = "#ffffff";
	} else if (select.value === "quoteGenerator1") {
		document.getElementById("body").style.background = "#6666ff";
	} else {
		document.getElementById("body").style.background = "#232230";
	}

}

// Get desired number of quotes
document.getElementById("generateButton").addEventListener("click", generateQuote);


//Reset button
function reset(){   
   location.reload();
}