var maximumWealth = function (accounts) {
    var totals = [];
    accounts.forEach(function (account) {
        totals.push(account.reduce(function (accumulator, currentValue) { return accumulator + currentValue; }, 0));
    });
    return Math.max.apply(Math, totals);
};
var app = function () {
    console.log(maximumWealth([[1, 5], [7, 3], [3, 5]]));
};
app();
