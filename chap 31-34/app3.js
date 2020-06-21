var day = new Array();
  day[0] = "Sun";
  day[1] = "Mon";
  day[2] = "Tue";
  day[3] = "Wed";
  day[4] = "Thus";
  day[5] = "Fri";
  day[6] = "Sat";
  
  var d = new Date();
  var n = day[d.getDay()];
  document.write("Today is "+n)