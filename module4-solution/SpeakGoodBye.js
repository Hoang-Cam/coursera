// This is an IIFE
(function () {
  // Your code goes here
  var speakWord = "Good Bye";
  function speak(name) {
    console.log(speakWord + " " + name);
  }
  // You can expose some variables or functions to the global scope if needed
  window.byeSpeaker = speak;
})();
// Create an empty object
var byeSpeaker = {};
// Define the speakWord variable
var speakWord = "Good Bye";
// Define the speak method and attach it to the byeSpeaker object
byeSpeaker.speak = function (name) {
  console.log(speakWord + " " + name);
};
// Expose the byeSpeaker object to the global scope
window.byeSpeaker = byeSpeaker;
// Using dot notation
byeSpeaker.speak = function (name) {
  console.log(speakWord + " " + name);
};

// Using bracket notation
byeSpeaker["speak"] = function (name) {
  console.log(speakWord + " " + name);
};
// Expose the byeSpeaker object to the global scope
window.byeSpeaker = byeSpeaker;
