var canConstruct = function (ransomNote, magazine) {
    var hashMap = {};
    for (var _i = 0, ransomNote_1 = ransomNote; _i < ransomNote_1.length; _i++) {
        var char = ransomNote_1[_i];
        hashMap[char] = (hashMap[char] || 0) + 1;
    }
    for (var _a = 0, magazine_1 = magazine; _a < magazine_1.length; _a++) {
        var char = magazine_1[_a];
        if (!hashMap[char] || hashMap[char] === 0) {
            return false;
        }
        else {
            hashMap[char] = (hashMap[char]) - 1;
        }
    }
    console.log(hashMap);
    return true;
};
var app = function () {
    console.log(canConstruct("aa", "ab"));
};
app();
