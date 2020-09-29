order = (words) => {
  var _array = words.split(" ");
  var _second_array = {};
  _array.forEach((word) => {_second_array[word.replace( /^\D+/g, '')[0]] = word})
  return Object.keys(_second_array).map(function (key,index) {return _second_array[key]}).join(" ");
}
