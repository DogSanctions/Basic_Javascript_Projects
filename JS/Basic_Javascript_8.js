function full_Sentence() {
    var part_1 = "At first ";
    var part_2 = "this sentence was ";
    var part_3 = "not complete, "
    var part_4 = "now it is."
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

function slice_Method() {
    var Sentence = "All work and no play makes Johnny boy dull.";
    var Section = Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = Section;
}

function my_Function() {
    var str = "Hello World!";
    var res = str.toUpperCase();
    document.getElementById("test").innerHTML = res;
  }

function search_Function() {
    var str = "Visit Youtube.";
    var n = str.search("Youtube");
    document.getElementById("search").innerHTML = n;
}

function string_Method() {
    var X =182;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

function precision_Method () {
    var X = 12938.3012987376112;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}

function fixed_Function() {
    var num = 6.45624;
    var n = num.toFixed(2);
    document.getElementById("Fixed").innerHTML = n;
}

function value_Function() {
    var str = "Netflix sucks!";
    var res = str.valueOf();
    document.getElementById("Value").innerHTML = res;
}

function countdown() {
    var seconds = document.getElementById("seconds").value;

    function tick() {
        seconds = seconds -1;
        TimeRanges.innerHTML = seconds;
        setTimeout(tick, 1000);
    if(seconds == -1) {
        alert("Time's up");
    }
        }
    tick();
}