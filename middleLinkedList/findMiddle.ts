class ListNode {
    constructor(public val?: number, public next?: ListNode | null) {
    }
}

const middleNode = (head: ListNode | null): ListNode | null => {
   let fastPointer: ListNode | null = head.next;
   let slowPointer: ListNode | null = head;

   while (fastPointer) {
       fastPointer = fastPointer.next?.next;
       slowPointer = slowPointer.next;
   }

   return slowPointer;
}

const app = () => {
    const arr = [1,2,3,4,5]
    let prevNode: ListNode | null = null;
    let head: ListNode | null = null;

    for (const val of arr) {
        const newNode = new ListNode(val);
        if (prevNode) {
            prevNode.next = newNode;
        } else {
            head = newNode;
        }
        prevNode = newNode;
    }

    let middle = middleNode(head);

    while(middle !== undefined) {
            console.log(middle.val);
            middle = middle.next
    }
}

app();