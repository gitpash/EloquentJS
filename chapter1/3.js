a = "#";
b = " ";

for (var c=""; c.length<=6; c+=a+b)
  {}
  for (var d=""; d.length<=6; d+=b+a)
  {}
for (i=0; i<4; i++)
  console.log("%s\n%s", c,d)
