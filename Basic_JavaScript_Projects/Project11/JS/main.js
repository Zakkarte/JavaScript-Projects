function Call_Loop() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

var X = "Hello World";
document.write(X.length);


var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}


function array_Function() {
    var Array = [];
    Array[0] = "One";
    Array[1] = "Two";
    Array[2] = "Three";
    Array[3] = "Four";
    Array[4] = "Five";
    document.getElementById("Array").innerHTML = "The current position in the array is " +
        Array[2] + ".";
}


function constant_function() {
    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black"};
    Musical_Instrument.color = "blue";
    Musical_Instrument.price = "$900";
    document.getElementById("Constant").innerHTML = "The cost of the " + Musical_Instrument.type + 
        " was " + Musical_Instrument.price;
}

var X = 88
document.write( "<br>" + X);
{
    let X = 28
    document.write("<br>" + X);
}
document.write("<br>" + X);


