
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};
// Complete the function below
function deleteNode(node){
    let temp = node.next
    
    if (temp == null) {
        node = null
    } else {
        node.data = temp.data
        node.next = temp.next
    }
}
