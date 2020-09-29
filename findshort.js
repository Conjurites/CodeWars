findShort = (s) => {
  let lenghts = [];
  let array = s.split(" ").map((word) => {lenghts.push(word.length)});
  return Math.min(...lenghts);
}
