list = (names) => {
  return names.map((elem) => {return elem.name}).join(", ").replace(/,([^,]*)$/," &$1");
}
