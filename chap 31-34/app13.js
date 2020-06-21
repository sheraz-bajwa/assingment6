var dob = new Date(prompt("enter your birth year"));
var dobmili = dob.getTime();

var today = new Date();
var todaymili = today.getTime();
var diff = todaymili - dobmili
var diffyear = diff/(1000*3600*24*30*12);
var f_dob = Math.floor(diffyear);
alert("You are "+f_dob + " year old "); 
if (diffyear > 18 ){
    alert("hurraahhh!! you are adult ")
}else{
    alert("you are not adult")
}