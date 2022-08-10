const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};
// Complete the function below
var isPalindrome = function (head) {
    let stk = []
    let cur = head
    while (cur != null) {
        stk.push(cur.data)
        cur = cur.next
    }
    cur = head
    while (stk.length > 0) {
        if (stk.pop() != cur.data) {
            return false
        }
        cur = cur.next
    }
    return true
};
