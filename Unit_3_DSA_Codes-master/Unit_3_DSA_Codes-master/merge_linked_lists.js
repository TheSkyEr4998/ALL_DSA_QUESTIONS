
const ListNode = class {
    constructor(nodeData) {
        this.val = nodeData;
        this.next = null;
    }
};

// Complete the function below

var mergeTwoLists = function(l1, l2) {
    let head = null
    let cur = null
    while (l1 != null && l2 != null) {
        if (l1.val < l2.val) {
            let temp = l1
            l1 = l1.next
            temp.next = null
            if (cur == null) {
                head = temp
                cur = temp
            } else {
                cur.next = temp
                cur = cur.next
            }
        } else {
            let temp = l2
            l2 = l2.next
            temp.next = null
            if (cur == null) {
                head = temp
                cur = temp
            } else {
                cur.next = temp
                cur = cur.next
            }
        }
    }
    
    if (l1 != null) {
        cur.next = l1
    } else {
        cur.next = l2
    }
    
    return head
};

