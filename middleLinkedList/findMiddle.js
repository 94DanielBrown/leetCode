var ListNode = /** @class */ (function () {
    function ListNode(val, next) {
        this.val = val;
        this.next = next;
    }
    return ListNode;
}());
var middleNode = function (head) {
    var _a;
    var fastPointer = head.next;
    var slowPointer = head;
    while (fastPointer) {
        fastPointer = (_a = fastPointer.next) === null || _a === void 0 ? void 0 : _a.next;
        slowPointer = slowPointer.next;
    }
    return slowPointer;
};
var app = function () {
    var arr = [1, 2, 3, 4, 5];
    var prevNode = null;
    var head = null;
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var val = arr_1[_i];
        var newNode = new ListNode(val);
        if (prevNode) {
            prevNode.next = newNode;
        }
        else {
            head = newNode;
        }
        prevNode = newNode;
    }
    var middle = middleNode(head);
    while (middle !== undefined) {
        // if (middle) {
        console.log(middle.val);
        middle = middle.next;
        // }
    }
};
app();
