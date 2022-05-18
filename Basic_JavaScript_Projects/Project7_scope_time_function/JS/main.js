//var X = 10

//function Add_number_1() {
//    document.write(X + 20 + "<br>");
//}

//function Add_number_2() {
//    document.write(X + 100 + "<br>");
//}

//Add_number_1();
//Add_number_2();

//function Add_number_3() {
//    var Y = 10
//    document.write(Y + 20 + "<br>");
//}

//function Add_number_4() {
//    document.write(Y + 100 + "<br>");
//}

//Add_number_3();
//Add_number_4();

//function get_Date() {
//    if (new Date().getHours() < 18) {
//        document.getElementById("Greeting").innerHTML = "How are you today?";
//    }
//}

function Age_Function() {
    Age = document.getElementById("Age").value;
    if (Age >= 18) {
        Vote = "You are old enough to vote!";
    }
    else {
        Vote = "You are not old enough to vote!";
    }
    document.getElementById("How_old_are_you").innerHTML=Vote;
}

function Time_function() {
    var Time = new Date().getHours();
    var Replay;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}