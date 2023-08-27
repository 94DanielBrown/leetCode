var runningSum = function (nums) {
    var arr = [];
    var x = 0;
    for (var i = 0; i < nums.length; i++) {
        x = x + nums[i];
        arr.push(x);
    }
    return arr;
};
var app = function () {
    console.log(runningSum([1, 2, 3, 4]));
};
app();
