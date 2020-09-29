alphabetPosition = (text) => {
  var alphabets = "abcdefghijklmnopqrstuvwxyz".toUpperCase();
  return text.toUpperCase().split("").map((string) => {
      var x = (alphabets.indexOf(string)+1).toString().trim()
      if (x != "0") {
        return x+" ";
      }
    }
  ).join("").replace(/\s+$/, '');
}
