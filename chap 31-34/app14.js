var customer = prompt("enter your name");
var month = prompt("enter your bill month");
var unit = prompt("emter your units");
var charges =prompt(  "charges per units")
document.write("K-Electric Bill" +"<br>"+"<br>"+"Customer Name : "+ customer + "<br>"
                + "Current Month : " + month +"<br>"
                + " Number of units : "+unit + "<br>"
                + "Charges per unit : "+charges + "<br>"
                + "Net Amount Payable (within Due Date) : " + unit*charges + "<br>"
                + "Late Payment Surcharge : "+" 350" + "<br>"
                + "Gross Amount Payable (after Due Date) : "+ unit*charges+"350");