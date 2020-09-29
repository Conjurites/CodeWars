def high_and_low(numbers):
  lh = [
    str(max([int(i) for i in numbers.split(" ")])),
    str(min([int(i) for i in numbers.split(" ")]))
  ]
  return f"{lh[0]} {lh[1]}"
