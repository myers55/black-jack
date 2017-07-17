/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to 
   write your logic.
*/

function handValue (hand) {
  var acesInWaiting = [];
  var sum;
  var handCard = hand[i];
  for (var i = 0; i < hand.length; i++) {
    if (handCard === "K" || handCard === "Q" || handCard === "J") {
      handCard = 10;
    } else if (handCard === "A") {
      acesInWaiting.push(handCard);
      handCard = 1;}
    }

  for (var i = 0; i < hand.length; i++) {
    handCard = parseInt(handCard);
  }

  sum = (hand.reduce((a, b) => a + b, 0));
  if (sum <= 10){
    if (acesInWaiting.length > 2) {
      acesInWaiting[i] = 11
    } else if (acesInWaiting.length < 2) {
      acesInWaiting[i] = 1;
    }
    acesInWaiting.reduce((a, b) => a + b, 0);
    sum += acesInWaiting;
    }
  return sum;
}



//output is a total hand value
/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/