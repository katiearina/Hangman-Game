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
var lettersGuessed = [];
var lettersGuessedDiv = document.getElementById("letters-guessed");
var lettersGuessedDiv2 = document.getElementById("letters-guessed-2");
var guessStart = 15;
var userGuess = 0;
var answerArray = [];
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

// Pick a random book title index 
var randomIndex = [Math.floor(Math.random() * bookTitleArray.length)];
	
	// Sets text on page opening
	currentGuess.innerHTML = "<h3>Guess a letter!</h3>";

	// Start guess counter on page opening
	guessRemaining.innerHTML = "<h3> You have " + guessStart + " guesses remaining.</h3>";

	// Console log the index chosen
	console.log(randomIndex);

	// Console log the book title at that index
	console.log(bookTitleArray[randomIndex]);

	// Sets book quote to match random index chosen
	bookQuote.innerHTML = "&#8220;" + bookQuoteArray[randomIndex] + "&#8221;";

	// Sets blank Answer Array to equal number of letters/characters in book title, makes them
	// into "_" characters
	for (var i = 0; i < bookTitleArray[randomIndex].length; i++) {
		answerArray[i] = "_";
		bookTitle.innerHTML = "<h2>" + (answerArray.join(" ")) + "</h2>";
    	}
	    	// Console log the Answer  
			console.log(answerArray.join(" "));

	// When user presses a key, convert key to uppercase and check against current Book Title.
	document.onkeyup = function() {
	userGuess = String.fromCharCode(event.keyCode).toUpperCase();
		// Console log key press
		console.log(userGuess);
		// Change text to show which key was pressed
		currentGuess.innerHTML = "<h3>You guessed " + userGuess + "!</h3>";
		// Add key press to answerArray and 
		lettersGuessed.push(userGuess);
		// Added letters guessed to "Letters Guessed:" page area
		lettersGuessedDiv.innerHTML = "<h3>" + (lettersGuessed.join(" ")) + "</h3>";
		// Console log answerArray as new letters are pressed
		console.log(lettersGuessed);
	}

			for (j = 0; j < bookTitleArray[randomIndex].length; j++) {
				console.log(j);
				console.log(bookTitleArray[j]);
				if (bookTitleArray.length[j] === userGuess) {
					answerArray[j] = userGuess;
					answerArray.join(" ");
					remainingLetters--;
					}
				else {
					guessStart--;
				}
			}