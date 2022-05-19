function full_Sentence () {
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence. ";
    var whole_sencence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sencence;
}

function slice_Method() {
    var Sentence = "All work and no play makes Johnny a dull boy";
    var Section = Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = Section;
}

var X = "This is standard text "

document.write (X.toUpperCase())

document.write (X.search("standard"))

function string_Method() {
    var X =182;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

function precision_Method() {
    var X = 12938.3012987376112;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}

function fixed_Method() {
    var X = 10.056983;
    document.getElementById("Fixed").innerHTML = X.toFixed(8);
}