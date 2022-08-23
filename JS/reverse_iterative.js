
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
}

// Complete the function below

function reverse(head) {
    let new_head = null
    let arr = []
    let cur = head
    
    while (cur != null) {
        arr.push(cur)
        cur = cur.next
    }
    
    new_head = arr.pop()
    cur = new_head
    
    while (arr.length > 0) {
        let temp = arr.pop()
        cur.next = temp
        cur = temp
    }
    
    cur.next = null
    
    return new_head
}

