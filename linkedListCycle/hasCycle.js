var ListNode = /** @class */ (function () {
    function ListNode(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
    return ListNode;
}());
var hasCycle = function (head) {
    if (!head || !head.next) {
        return false;
    }
    var slow = head;
    var fast = head.next;
    while (fast != null && fast.next != null) {
        fast = fast.next.next;
        slow = slow.next;
        if (fast === slow)
            return true;
    }
    return false;
};
var app = function () {
    var head = null;
    var arr = [3, 2, 0, -4];
    var nodes = [];
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var i = arr_1[_i];
        nodes[i] = new ListNode(arr[i]);
    }
    for (var _a = 0, arr_2 = arr; _a < arr_2.length; _a++) {
        var i = arr_2[_a];
        nodes[i].next = nodes[i + 1];
    }
    //create cycle from last node to second node
    nodes[arr.length - 1].next = nodes[1];
    head = nodes[1];
    console.log(hasCycle(head));
};
app();
