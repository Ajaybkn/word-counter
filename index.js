var textbox = document.getElementById("textbox");
textbox.addEventListener("input", function () {
  var text = this.value;
  var charLength = text.length;
  document.getElementById("char").innerHTML = charLength;
  text = text.trim();

  var words = text.split(" ");
  var cleanList = words.filter(function (e) {
    return e != "";
  });
  document.getElementById("word").innerHTML = cleanList.length;
});
