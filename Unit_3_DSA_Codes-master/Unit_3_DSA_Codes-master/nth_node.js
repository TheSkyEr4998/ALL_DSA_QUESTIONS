const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

function nth_node(head,n){
    let lead = head
    for (let i = 0;i < n;i++) {
        lead = lead.next
    }
    
    let cur = head
    while (lead != null) {
        cur = cur.next
        lead = lead.next
    }
    
    return cur.data
}
