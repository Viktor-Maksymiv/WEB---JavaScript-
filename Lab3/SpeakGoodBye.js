var speakGoodBye = (function() {
  var speakWord = "Good Bye";
  return function(name) {
    console.log(speakWord + " " + name);
  };
})();