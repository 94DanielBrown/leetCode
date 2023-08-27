var twoSum = function (nums, target) {
    var current;
    var indexes = [];
    for (var i = 0; i < nums.length; i++) {
        for (var x = 0; x < nums.length; x++) {
            if (nums[i] + nums[x] === target && i !== x) {
                indexes.push(i, x);
                return indexes;
            }
        }
    }
};
var app = function () {
    console.log(twoSum([2, 7, 11, 15], 9));
    console.log(twoSum([3, 2, 4], 6));
};
app();
