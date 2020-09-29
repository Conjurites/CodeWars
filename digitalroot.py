def digital_root(n):
  num = eval("+".join(j for j in str(n)))
  if len(str(num)) > 1:
    return digital_root(num)
  return num
