function Counting_to_Ten() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++
    }
    document.getElementById("Counting_to_Ten").innerHTML = Digit;
}

function string_Function() {
    var str = "This is a string.";
    var n = str.length;
    document.getElementById("string").innerHTML = n;
}

var Animals = ["Dogs, Cats, Snakes, Fishes, Horses, Rodents"]
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Animals.length; Y++) {
    Content += Animals[Y] + "<br>";
    }
    document.getElementById("List_of_Animals").innerHTML = Content;
}

function sticker_pics() {
    var sticker_picture = [];
    sticker_picture[0] = "dead";
    sticker_picture[1] = "rage";
    sticker_picture[2] = "lazy";
    sticker_picture[3] = "excited";
    sticker_picture[4] = "hapyy";
    document.getElementById("sticker").innerHTML = "In this sticker, peanut is " + sticker_picture[2] + " . ";
}

function constant_function () {
    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black"};
    Musical_Instrument.color = "blue";
    Musical_Instrument.price = "$900";
    document.getElementById("Constant").innerHTML = "The cost of the " + Musical_Instrument.type + " was " + Musical_Instrument.price;
}

