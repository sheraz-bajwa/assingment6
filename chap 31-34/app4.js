var day = new Array();
  day[0] = "“It’s Fun day”";
  day[1] = "Mon";
  day[2] = "Tue";
  day[3] = "Wed";
  day[4] = "Thus";
  day[5] = "Fri";
  day[6] = " “It’s Fun day”";
  
  var d = new Date();
  var n = day[d.getDay()];
  document.write("Today is "+n)