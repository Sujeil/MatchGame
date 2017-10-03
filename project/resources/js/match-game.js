var MatchGame = {};

/*
  Sets up a new game after HTML document has loaded.
  Renders a 4x4 board of cards.
*/

/*
  Generates and returns an array of matching card values.
 */

MatchGame.generateCardValues = function () {
  var cardsInOrder = [];

  for (i = 0; cardsInOrder.length < 16; i++){
    cardsInOrder.push(cardNumberOne);
    cardNumberOne++;
    cardsInOrder.push(cardNumberTwo);
    cardNumberTwo++;
  }

  var cardsRandom = [];

  cardsRandom.push(...cardsInOrder.sort(function (a, b) {return 0.5 - Math.random()}));

};

/*
  Converts card values to jQuery card objects and adds them to the supplied game
  object.
*/

MatchGame.renderCards = function(cardValues, $game) {

};

/*
  Flips over a given card and checks to see if two cards are flipped over.
  Updates styles on flipped cards depending whether they are a match or not.
 */

MatchGame.flipCard = function($card, $game) {

};