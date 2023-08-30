class ListNode {
    constructor(public val?: number, public next?: ListNode | null) {
    }
}


const middleNode = (head: ListNode | null): ListNode | null => {
   if (head === null) {
       return null
   }

   let slowPointer: ListNode | null = head;
   let fastPointer: ListNode | null = head;

   while (fastPointer !== null && fastPointer.next !== null) {
       slowPointer = slowPointer.next;
       fastPointer = fastPointer.next.next;
   }

   return slowPointer;
}

const app = () => {
    let arr = [1,2,3,4,5]
    let prevNode: ListNode | null = null;
    let head: ListNode | null = null;

    for (const val of arr) {
        const newNode = new ListNode(val);
        if (prevNode) {
            prevNode.next = newNode;
        }
    }
}

app();