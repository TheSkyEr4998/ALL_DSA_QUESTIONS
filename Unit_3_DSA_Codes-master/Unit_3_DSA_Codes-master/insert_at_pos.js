
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

// Complete the function below

function insertNodeAtPosition(head, data, position) {
    let new_node = new LinkedListNode(data)
    
    if (head == null) {
        head = new_node
    } else {
        if (position == 0) {
            new_node.next = head
            head = new_node
        } else {
            let cur = head
            for (let i = 0;i < position - 1;i++) {
                cur = cur.next
            }
            
            new_node.next = cur.next
            cur.next = new_node
        }
    }
    return head
}

