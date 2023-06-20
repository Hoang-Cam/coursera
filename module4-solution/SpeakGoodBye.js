(function (window) { var speakWord = “Good Bye”; // use " or ’ instead of “ and ” function speak(name) { console.log(speakWord + " " + name); } window.speak = speak; })(window);
