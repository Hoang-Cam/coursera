// This is an IIFE
(function () {
  // Your code goes here
  // Create an empty object
  var byeSpeaker = {};
  // Define the speakWord variable
  var speakWord = "Goodbye";
  // Define the speak method and attach it to the byeSpeaker object
  byeSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  };
  // Expose the byeSpeaker object to the global scope
  window.byeSpeaker = byeSpeaker;
})();
