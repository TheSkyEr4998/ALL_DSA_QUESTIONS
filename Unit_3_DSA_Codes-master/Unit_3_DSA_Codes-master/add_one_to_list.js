
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

var addOneToLinkedList = function(head) {
    let revh = rev(head)
    
    let carry = 1
    let cur = revh
    
    while (carry > 0 && cur != null) {
        let cur_data = cur.data
        cur.data = (cur_data + carry) % 10
        carry = parseInt((cur_data + carry) / 10)
        
        cur = cur.next
    }
    
    let new_head = rev(revh)
    
    if (carry > 0) {
        let new_node = new LinkedListNode(carry)
        new_node.next = new_head
        new_head = new_node
    }
    
    return new_head
};

function rev(head) {
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

