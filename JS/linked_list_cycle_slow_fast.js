const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};
// Complete the function below
var hasCycle = function(head) {
    let slow = head
    let fast = head.next
    
    while (slow != null && fast != null && fast.next != null) {
        if (slow.data == fast.data) {
            return true
        }
        slow = slow.next
        fast = fast.next.next
    }
    
    return false
};