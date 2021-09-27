/*Javascript Refresher Homework 1 
2/12/2021
Jade Holt*/
/* Function multiplyBy()*/
function multiplyBy() {
var firstNumber = (document.getElementById("firstNumber").value);
var secondNumber = (document.getElementById("secondNumber").value);
document.getElementById("result").innerHTML = firstNumber * secondNumber; 

}

/*Function addTogether()*/
function addTogether() {
var firstNumber = parseInt(document.getElementById("firstNumber").value);
var secondNumber = parseInt(document.getElementById("secondNumber").value);
document.getElementById("result").innerHTML = firstNumber + secondNumber; 
}

