
  
  var date1 = new Date("aprail 25, 2020"); 
  var date2 = new Date(); 
    
   
  var Difference_In_Time = date2.getTime() - date1.getTime(); 
    
   
  var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24); 
  var tdays = Math.floor(Difference_In_Days);
    
  
  document.write("Total number of days between dates  <br>"
                 + date1 + "<br> and <br>" 
                 + date2 + " is: <br> " 
                 + tdays + " Days have passed since 1st Ramzan, 2020"); 