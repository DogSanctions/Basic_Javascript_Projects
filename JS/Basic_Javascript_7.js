var X = 10;
function Sub_numbers_1 () {
    document.write(20 - X - "<br>");
}
function Sub_numbers_2 () {
    document.write(X - 72);
}
Sub_numbers_1();
Sub_numbers_2();

function Sub_numbers_3() {
    var X = -21;
    document.write(15 - X + "<br>");
    console.log(15 - X);
}

function Sub_numbers_4() {
    document.write(X - 85);
}
Sub_numbers_3();
Sub_numbers_4();

function If_Function() {
    if (new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML = "How are you today?"
    }
}

function Age_Function() {
    Age = document.getElementById("Age").value;
    if (Age >= 28) {
        Club = "You are too old to come in";
    }
    else {
        Club = "Come on in brosky"
    }
    document.getElementById("How_Old?").innerHTML = Club;
}

function Time_Function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time >0) {
        Reply = "It is morning time!";
    }
    else if (Time > 12 == Time <18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It's evening time."
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}