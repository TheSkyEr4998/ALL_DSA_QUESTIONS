
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

// Complete the function below

function deleteNode(head, position) {
   if (position == 0) {
       let temp = head
       head = head.next
       
       temp.next = null
   } else {
       let cur = head
       for (let i = 0;i < position - 1;i++) {
           cur = cur.next
       }
       
       let temp = cur.next
       cur.next = temp.next
       temp.next = null
   }
   
   return head
}

