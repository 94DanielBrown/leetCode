var fizzBuzz = function (n) {
    var arr = [];
    for (var i = 1; i <= n; i++) {
        if (i % 15 === 0) {
            arr.push("FizzBuzz");
        }
        else if (i % 3 === 0) {
            arr.push("Fizz");
        }
        else if (i % 5 === 0) {
            arr.push("Buzz");
        }
        else {
            arr.push(String(i));
        }
    }
    return arr;
};
var app = function () {
    console.log(fizzBuzz(3));
    console.log(fizzBuzz(5));
    console.log(fizzBuzz(15));
};
app();
