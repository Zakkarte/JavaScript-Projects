function addition_function() {          //declairing function
    var addition = 2 + 2;               //defining variable
    document.getElementById("Math1").innerHTML = "2 + 2 = " + addition;  //getting id within HTML and inputing into HTML
}

function subtraction_function() {
    var subtraction = 3 - 2;
    document.getElementById("Math2").innerHTML = "3 - 2 = " + subtraction;
}

function multiplication_function() {
    var simple_Math = 6 * 8 ;
    document.getElementById("Math3").innerHTML = "6 * 8 = " + simple_Math
}

function division_function() {
    var simple_Math = 48 / 6 ;
    document.getElementById("Math4").innerHTML = "48 / 6 = " + simple_Math
}

function more_Math() {
    var simple_Math = (1 + 2) * 10 / 2 -5 ;
    document.getElementById("Math5").innerHTML = "(1 + 2) * 10 / 2 -5 = " + simple_Math
}

function modulus_Operator() {
    var simple_Math = 25 % 6;
    document.getElementById("Math6").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_Math;
}

function negation_Operator() {
    var X = 10 ;
    document.getElementById("Math7").innerHTML = -X ;
}

var Y = 5;                      //Defining variable
Y++;                            //incrimentally increasing variable 
document.write(Y);              // writing variable 

var Z = 5.25;
Z--;
document.write(Z);

window.alert (Math.random());   //Displaying random number as alert

window.alert(Math.random() * 100) ;     //Multiplying random number by 100