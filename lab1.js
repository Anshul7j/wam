var nstring = "192.35";
var num1 = Number(nstring);
document.write("number is: " +num1 + "<br/>");
document.write("The number only till 4 digits is: "+num1.toPrecision(4)+"<br/>");
document.write("The number with 5 digits after decimal is: "+num1.toFixed(5)+"<br/>");
document.write("Is it not a number:" +isNaN(num1)+"<br/>");
