var deck = $('.deck'); // selects the body of the deck
var openCards = [];


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
function clickedCard() {

	var allCards = deck.children();
	allCards.click(function(){
	$(this).addClass('open show')

});
	return allCards;

}

function cardIcon () {

	var icon = clickedCard().children();
	icon.click(function(){
		var iconClass = icon.attr('class');
		console.log(iconClass)
	})
}

// If a card is clicked:
// - display the card's symbol (put this functionality in another function that you call from this one)
function showCard() {
	clickedCard();
	cardIcon();
}

//  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)


	// if (choice1 === null) {
	// 	choice1 = elm;
	// 	choice1.classList.remove('hidden');

	// } else if (choice2 === null) {
	// 	choice2 = elm;
	// 	choice2.classList.remove('hidden');
	// 		// evaluates if value of choice1 and choice2 are the same
	// 		if (choice1.innerHTML === choice2.innerHTML) {
	// 			// creates var id1 and id2 to get ids of each element
	// 			var id1 = choice1.getAttribute('id');
	// 			var id2 = choice2.getAttribute('id');

	// 			// evaluates ids of each element
	// 			// when ids are different,
	// 			// and classes are similar
	// 			// elements are equal

	// 			if (id1 != id2) {

	// 				matches.push(choice1.innerHTML);
	// 				matches.push(choice2.innerHTML);

	// 				// preventing user clicks on same card
	// 				// and having program accept that as choice
	// 				choice1.onclick = null;
	// 				choice2.onclick = null;

	// 			} 

	// 			choice1 = null;
	// 			choice2 = null;

	// 		} else {
	// 			var t = setTimeout(function(){

	// 				// confirming that choice1 and choice2
	// 				// are not null
	// 				if( choice1 && choice2 ) {

	// 					choice1.classList.add('hidden');
	// 					choice2.classList.add('hidden');
	// 					choice1 = null;
	// 					choice2 = null;
	// 				}

	// 			}, 800);

	// 		}


	// 	} else {

	// 	// converts element back to secret
	// 	// user tries again 
	// 	choice1.classList.add('hidden');
	// 	choice2.classList.add('hidden');
	// 	choice1 = null;
	// 	choice2 = null;

	// }
	
	// if (matches.length === cards.length) {
	// 	console.log(matches);
	// 	console.log('game over');
	// 	// cambiar nombre de start button for reset button. Cambiar innerHTML
	// 	clearInterval(timerId);


	// }

shuffle(cards);
dealCard();
showCard();