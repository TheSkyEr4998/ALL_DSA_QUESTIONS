
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
}

// Complete the function below

function reverse(head) {
    return doit(head, null)
}

function doit(cur, pre) {
    if (cur == null) {
        return pre
    }
    
    let temp = cur.next
    cur.next = pre
    return doit(temp, cur)
}

