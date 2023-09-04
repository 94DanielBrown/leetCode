class ListNode {
    val: number
    next: ListNode | null

    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

const hasCycle = (head: ListNode | null): boolean => {
    if (!head || !head.next) {
        return false
    }

    let slow = head;
    let fast = head.next;

    while(fast != null && fast.next != null) {
        fast = fast.next.next;
        slow = slow.next;
        if (fast === slow) return true;
    }

    return false
}


const app = () => {
    let head: ListNode | null = null;
    let arr: number[] = [3, 2, 0, -4];
    let nodes: ListNode[] = [];

    for (const i of arr) {
        nodes[i] = new ListNode(arr[i])

    }

    for (const i of arr) {
        nodes[i].next = nodes[i + 1];
    }

    //create cycle from last node to second node
    nodes[arr.length -1].next = nodes[1]

    head = nodes[1];

    console.log(hasCycle(head));
}

app()