def maskify(cc):
  if len(cc) < 2: return cc
  return "".join(j.replace(j,"#") for j in cc[0:-4]) + cc[-4:]
