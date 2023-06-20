// This is an IIFE
(function () {
  // Your code goes here
  var speakWord = "Hello";
  function speak(name) {
    console.log(speakWord + " " + name);
  }
  // You can expose some variables or functions to the global scope if needed
  window.helloSpeaker = speak;
})();
// Create an empty object
var helloSpeaker = {};
// Define the speakWord variable
var speakWord = "Hello";
// Define the speak method and attach it to the helloSpeaker object
helloSpeaker.speak = function (name) {
  console.log(speakWord + " " + name);
};
// Expose the helloSpeaker object to the global context
window.helloSpeaker = helloSpeaker;
// Using dot notation
helloSpeaker.speak = function (name) {
  console.log(speakWord + " " + name);
};

// Using bracket notation
helloSpeaker["speak"] = function (name) {
  console.log(speakWord + " " + name);
};
// Expose the helloSpeaker object to the global scope
window.helloSpeaker = helloSpeaker;
