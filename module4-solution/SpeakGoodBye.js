// This is an IIFE
(function () {
  // Your code goes here
  var speakWord = "Good Bye"; // This variable is not attached to the byeSpeaker object
  function speak(name) {
    console.log(speakWord + " " + name); // This function can access the speakWord variable from the scope
  }
  // You can expose some variables or functions to the global scope if needed
  window.byeSpeaker = byeSspeaker;
})();
