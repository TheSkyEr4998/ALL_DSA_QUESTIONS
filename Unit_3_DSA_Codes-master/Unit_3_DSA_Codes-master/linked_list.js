class LinkedList {
    constructor(val) {
        this.data = val
        this.next = null
    }
}

let head = null

function insert_at_beginning(val) {
    let new_node = new LinkedList(val)
    new_node.next = head

    head = new_node
}

function insert_at_end(val) {
    let new_node = new LinkedList(val)
    if (head == null) {
        head = new_node
    } else {
        let cur = head
        while (cur.next != null) {
            cur = cur.next
        }
        cur.next = new_node
    }
}

function insert_after(prev_node, val) {
    if (prev_node == null) {
        console.log("previous node is null!")
        return
    }

    let new_node = new LinkedList(val)
    new_node.next = prev_node.next
    prev_node.next = new_node
}

function delete_at_beginning() {
    let temp = head
    head = head.next

    return temp
}

function delete_at_end() {
    if (head == null) {
        return null
    } else if (head.next == null) {
        let temp = head
        head = null
        return temp
    } else {
        let cur = head
        while (cur.next.next != null) {
            cur = cur.next
        }
        let temp = cur.next
        cur.next = null
        return temp
    }
}

function delete_after(prev_node) {
    if (prev_node == null) {
        console.log("previous node is null!")
        return null
    } else if (prev_node.next == null) {
        console.log("Nothing after prev node!")
        return null
    } else {
        let temp = prev_node.next
        prev_node.next = prev_node.next.next

        return temp
    }
}