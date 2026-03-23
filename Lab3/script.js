(function() {
  var names = ["Bill", "John", "Jen", "Jason", "Paul", "Frank", "Steven", "Larry", "Paula", "Laura", "Jim"];

  for (var i = 0; i < names.length; i++) {
    if (names[i].charAt(0).toLowerCase() === "j") {
      speakGoodBye(names[i]);
    } else {
      speakHello(names[i]);
    }
  }

  console.log("--- ASCII sum of name letters vs threshold 400 ---");

  for (var j = 0; j < names.length; j++) {
    var sum = 0;
    for (var k = 0; k < names[j].length; k++) {
      sum += names[j].charCodeAt(k);
    }
    if (sum > 400) {
      speakGoodBye(names[j]);
    } else {
      speakHello(names[j]);
    }
  }
})();