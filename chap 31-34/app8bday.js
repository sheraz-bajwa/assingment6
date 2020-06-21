var day = new Array();
  day[0] = "Sun";
  day[1] = "Mon";
  day[2] = "Tue";
  day[3] = "Wed";
  day[4] = "Thus";
  day[5] = "Fri";
  day[6] = "Sat";
var a = new Date();
var b = new Date("aprail 28, 2001");
var c =day[ b.getDay()];
document.write(c)