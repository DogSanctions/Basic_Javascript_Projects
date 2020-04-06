{
document.write(typeof 3);
}

function my_Function() {
    document.getElementById("NaN").innerHTML = 0/0;
}

function ft_Function() {
    document.getElementById("FT").innerHTML = 0/0;
    document.getElementById("FT").innerHTML = isNaN('I like caramel apples');
    document.getElementById("FT").innerHTML = isNaN('4570');

}

function inf_Function() {
document.getElementById("inf").innerHTML =2E310;
}

function negative_Function() {
document.getElementById("negative").innerHTML =-3E310;
}

function tBoo_Function() {
    document.getElementById("tBoo").innerHTML = 20 > 2;
}

function fBoo_Function() {
    document.getElementById("fBoo").innerHTML = 323 < 1;
}

/*EVERYTHING BOOLEAN IN CONSOLE BECAUSE LAZY*/
{
console.log(3000+200);
console.log(3000 < 2);
console.log(200==200);
console.log(350==2);
console.log(5 > 2 && 10 > 4);
console.log(5 > 10 && 10 > 4);
console.log(5 > 10 || 10 > 4);
console.log(5 > 10 || 10 > 20);
}

function coer_Function() {
    document.getElementById("coer").innerHTML = "305" + 6;
}

function eq_function() {
    X = 100;
    Y = 100;
    document.getElementById("eq").innerHTML = X === Y;
}

function eqf_function() {
    X = 20;
    Y = "20";
    document.getElementById("eqf").innerHTML = X === Y;
}

function eq2_function() {
    A = "bread";
    B = "bread";
    document.getElementById("eq2").innerHTML = X === Y;
}
    
function eqf2_function() {
    X = 53;
    Y = "20";
    document.getElementById("eqf2").innerHTML = X === Y;
}

function not_Function() {
    document.getElementById("Not").innerHTML = !(20 > 10);
}

function nott_Function() {
    document.getElementById("Nott").innerHTML = !(1 > 10);
}