var i = 8;
var j = 0;
try {
    console.log(j / i);
}
catch (ArithmeticException) {
    console.log('Not divisible by  0');
}
