// This is an IIFE
(function () {
  // Your code goes here
  // Create an empty object
  var helloSpeaker = {};
  // Define the speakWord variable
  var speakWord = "Hello";
  // Define the speak method and attach it to the helloSpeaker object
  helloSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  };
  // Expose the helloSpeaker object to the global scope
  window.helloSpeaker = helloSpeaker;
})();
