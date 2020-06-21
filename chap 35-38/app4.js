function calc(num1,opr,num2){
    if(opr === "+"){
        return num1 + num2
    }
    else if(opr === "-"){
        return num1 - num2
    }
    else if(opr === "*"){
        return num1 * num2
    }
    else{
        return "incorect"
    }
}

var result = calc(5, "-",10,"<br>");
var result1 = calc(4, "+",6,"<br>");
var result2 = calc(4, "*",9,"<br>");


document.write("your ans is "+result)  
document.write("your ans is "+result1)  
document.write("your ans is "+result2)  



calc();