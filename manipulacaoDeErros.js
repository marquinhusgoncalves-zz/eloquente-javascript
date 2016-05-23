function canYouSpotTheProblem() {
    "use strict";
    for (counter = 0; counter < 10; counter++)
        console.log("Happy happy");
}

canYouSpotTheProblem(); // ReferenceError: counter is not defined

//Asserções

function AssertionFailed(message) {
  this.message = message;
}
AssertionFailed.prototype = Object.create(Error.prototype);

function assert(test, message) {
  if (!teste)
    throw new AssertionFailed(message);
}

function lastElement(array) {
  assert(array.length > 0, "empty array in lastElement");
  return array[array.length - 1];
}