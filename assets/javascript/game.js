// var bookTitle, currentGuess, bookQuote, previousGuess, guessRemaining

// List of Book Titles
var bookTitleArray = [
"kafka on the shore", 
"the wind-up bird chronicle",
"norwegian wood", 
"a wild sheep chase", 
"sputnik sweetheart", 
"hard-boiled wonderland and the end of the world", 
"dance dance dance",
"south of the border, west of the sun", 
"the elephant vanishes",
"hear the wind sing", 
"blind willow, sleeping woman"];

// List of Quotes for each Book Title
var bookQuoteArray = [
"Taking crazy things seriously is a serious waste of time", 
"I realize full well how hard it must be to go on living alone in a place from which someone has left you, but there is nothing so cruel in this world as the desolation of having nothing to hope for.", 
"Don't feel sorry for yourself. Only assholes do that.",
"Whether you take the doughnut hole as a blank space or as an entity unto itself is a purely metaphysical question and does not affect the taste of the doughnut one bit.", 
"And it came to me then. That we were wonderful traveling companions but in the end no more than lonely lumps of metal in their own separate orbits. From far off they look like beautiful shooting stars, but in reality they're nothing more than prisons, where each of us is locked up alone, going nowhere. When the orbits of these two satellites of ours happened to cross paths, we could be together. Maybe even open our hearts to each other. But that was only for the briefest moment. In the next instant we'd be in absolute solitude. Until we burned up and became nothing.", 
"Everyone may be ordinary, but they're not normal.",
"Life is a lot more fragile than we think. So you should treat others in a way that leaves no regrets. Fairly, and if possible, sincerely.",
"I can't build a simple shelf. I have no idea how to change an oil filter on a car. I can't even stick a stamp on an envelope straight. And I'm always dialling the wrong number. But I have come up with a few original cocktails that people seem to like.", 
"You don't have to judge the whole world by your own standards. Not everybody is like you, you know.",
"I tell lies sometimes. The last time I lied was a year ago. I absolutely detest lying. You could say that lying and silence are the two greatest sins of present day society. Actually, I lie a lot, and I'm always clamming up.",
"Thinking about spaghetti that boils eternally but is never done is a sad, sad thing."
];

var bookQuote = document.getElementById("book-quote");
var bookTitle = document.getElementById("book-title");
// var currentTitle = bookTitleArray[randomNumber].toUpperCase();
var currentGuess = document.getElementById("current-guess");
var guessRemaining = document.getElementById("guess-remaining");
var guessStart = 15;
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
// var randomNumber = (Math.floor(Math.random() * bookTitleArray.length));

// Pick a random book title index [i]
	var randomIndex = bookTitleArray[Math.floor(Math.random() * bookTitleArray.length)];
	console.log(randomIndex);
	console.log([bookTitleArray.indexOf(randomIndex)])

	currentGuess.innerHTML = "<h3>Guess a letter!</h3>";

	bookQuote.innerHTML = "&#8220;" + bookQuoteArray[bookTitleArray.indexOf(randomIndex)] + "&#8221;";

	var answerArray = [];
		for (var i = 0; i < randomIndex.length; i++) {
			 answerArray[i] = "_";
			 if (answerArray[i] === " ") {
			 	answerArray[i] = " ";
			 }
	    }

	console.log(answerArray.join(" "));
	bookTitle.innerHTML = "<h2>" + (answerArray.join(" ")) + "</h2>";

	// Test! Starting Guess
	guessRemaining.innerHTML = "<h3> You have " + guessStart + " guesses remaining.</h3>";

	// When user presses a key, convert key to uppercase and check against current Book Title.
	document.onkeyup = function() {
	var userGuess = String.fromCharCode(event.keyCode).toUpperCase();

	currentGuess.innerHTML = "<h3>You guessed " + userGuess + "!</h3>";
	}


// // Create an array to house the underscores needed
// var answerArray = [];
// for (var i = 0; i <randomIndex.length; i++) {
// 	answerArray[i] = "_";
// 	bookTitle.innerHTML = "<h2>" + answerArray.join(" ") + "</h2>";
// }

// var remainingLetters = bookTitleArray.length;

// document.onkeyup = function() {
// 	var userGuess = String.fromCharCode(event.keyCode).toUpperCase();

// 	// if (userGuess === null) {
// 	// 	// break;
// 	// }
// 	if (userGuess.length!==1) {
// 		currentGuess.innerHTML = "<h3>Please press only one letter!</h3>";
// 	}
// 	else {
// 		for (var j = 0; j < randomIndex.length; j++) {
// 	 if (randomIndex[j] === userGuess) {
// 	 	answerArray[j] = guess;
// 	 	remainingLetters--;
// 	 }
// }
// 	}
// }

// console.log(answerArray);

// 	// bookTitle.innerHTML = "<h2>" + answerArray + "</h2>";

// // Test! Starting Guess
// 	guessRemaining.innerHTML = "<h3> You have " + guessStart + " guesses remaining.</h3>";
// 	currentGuess.innerHTML = "<h3>Guess a letter!</h3>";

// // When user presses a key, convert key to uppercase and check against current Book Title.
// // document.onkeyup = function() {
// // 	var userGuess = String.fromCharCode(event.keyCode).toUpperCase();

// for (var i = 0; i < alphabet.length; i++) {

// 	// This is not working. Need to figure out the toUpperCase function.
// 	// if (userGuess === alphabet[i].toUpperCase()) {
// 	// 	currentGuess.innerHTML = "<h3>You guessed " + userGuess + "!</h3>";
// 	// 	}

// 	// This isn't working as expected -- need to work on these conditionals. Logging
// 	// 25x for each go-round.
// 	// else {
// 	// 	console.log("Error");
// 	// }

// // Use this code for if the guess letter =/= letter in Book Title.
// // else {
// // 	guessStart = (guessStart - 1);
// // 	guessRemaining.innerHTML = "<h3> You have " + guessStart + " guesses remaining.</h3>";
// // }
// }


// // Test! Insert for loop that generates a random index to select book title and 
// // also changes blockquote accordingly to match book.
// // for (var i = 0; i < bookTitleArray.length; i++) {
// 	// var randomNumber = (Math.floor(Math.random() * bookTitleArray.length));
// 	// console.log(randomNumber);
// 	bookQuote.innerHTML = "&#8220;" + bookQuoteArray[randomIndex] + "&#8221;";
// 	bookTitle.innerHTML = "<h2>" + answerArray + "</h2>";


// // 		if (userGuess === alphabet[randomNumber]) {
// // 		alert("Yo!");
// // }
