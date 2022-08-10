
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

// Complete the function below

function insertNodeAtTail(head, data) {
    let new_node = new LinkedListNode(data)
    
    if (head == null) {
        head = new_node
    } else {
        let cur = head
        while (cur.next != null) {
            cur = cur.next
        }
        cur.next = new_node
    }
    
    return head
}

