
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.visited = false
        
        this.next = null;
    }
};
// Complete the function below
var hasCycle = function(head) {
    let cur = head
    
    while (cur != null) {
        if (cur.visited) {
            return true
        }
        cur.visited = true
        cur = cur.next
    }
    
    return false
};

