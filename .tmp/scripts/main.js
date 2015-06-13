(function() {
  var h1, text;

  h1 = document.createElement("h1");

  text = document.createTextNode("Hello world via coffee script");

  h1.appendChild(text);

  document.body.appendChild(h1);

}).call(this);
