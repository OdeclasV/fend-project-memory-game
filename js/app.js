var oneCard = undefined;
var openCards = [];    // creates empty array to hold cards that were opened
var deck = $('.deck'); // selects the body of the deck


/*
 * Create a list that holds all of your cards
 */
var cards = [

{draw: "fa-diamond"},
{draw: "fa-diamond"},
{draw: "fa-android"},
{draw: "fa-android"},
{draw: "fa-anchor"},
{draw: "fa-anchor"},
{draw: "fa-bicycle"},
{draw: "fa-bicycle"},
{draw: "fa-bank"},
{draw: "fa-bank"},
{draw: "fa-bomb"},
{draw: "fa-bomb"},
{draw: "fa-bolt"},
{draw: "fa-bolt"},
{draw: "fa-cube"},
{draw: "fa-cube"}

];

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */


// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

// creates card elements (li and i) on the document
// takes no inputs
// outputs element card inside ul element 
function dealCard () {

	var cardElm = '';

	cards.forEach(function(card){
		cardElm = '<li class="card"><i class="fa ' + card.draw + '"></i> </li>';

	deck.append(cardElm);

	});

}



/*
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */

// set up the event listener for a card
// if card is clicked, shows card's symbol
function clickedCards() {
	var allCards = deck.children(); // li elements
	allCards.on('click',function(){
		$(this).addClass('open show');
		oneCard = $(this).find('i');
		cardIcon(oneCard);
		//console.log(oneCard);

	})

}


function cardIcon (card) {
	openCards.push(card);
	if (openCards.length != 0) {
		console.log(true)
	}

}


function showCard() {
	// If a card is clicked:
	// - display the card's symbol (put this functionality in another function that you call from this one)
	clickedCards();
	//cardIcon();
}



shuffle(cards);
dealCard();
showCard();