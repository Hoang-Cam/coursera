(function (window) { var speakWord = “Hello”; // use " or ’ instead of “ and ” function speak(name) { console.log(speakWord + " " + name); } window.speak = speak; })(window);
