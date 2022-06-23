

var num1 = prompt('Enter first number');
var operator = prompt('either +, -, * or /')
var num2 = prompt('Enter second number');


if (operator === '+') { 
    alert ('The answer is:' +  num1 + num2);
}
else if (operator === '-') {
    alert ( 'The answer is:' +  num1 - num2);
}
else if (operator === '*') {
    alert ('The answer is:'  +  num1 * num2);

} else if (operator === '/') {
  alert ('The answer is:'    +   num1 / num2);
}
//var sum = ((num1) (operator) (num2));
