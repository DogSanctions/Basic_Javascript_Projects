function addition_Function() {
  var addition = 2 + 8;
  document.getElementById("Math").innerHTML = "2 + 8 = " + addition;
}

function subtraction_Function() {
  var subtraction = 2 - 8;
  document.getElementById("Math_2").innerHTML = "2 - 8 = " + subtraction;
}

function multiplication_Function() {
  var simple_Math = 2 * 8;
  document.getElementById("Math_3").innerHTML = "2 * 8 = " + simple_Math
}

function division_Function() {
  var simple_Math = 24 / 8;
  document.getElementById("Math_4").innerHTML = "24 / 8 = " + simple_Math;
}

function more_Math() {
  var simple_Math = (1+2) *20 / 2 -2;
  document.getElementById("Math_5").innerHTML = "1 plus 2, multiplied by 20, divided in half and then subtracted by 2 equals " + simple_Math;
}

function modulus_Operator() {
  var simple_Math = 25 % 6;
  document.getElementById("Math_6").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_Math
}