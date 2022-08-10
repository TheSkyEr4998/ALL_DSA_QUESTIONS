class Queue {
    constructor (size) {
        this.max_size = size
        this.Q = []
    }

    get_front() {
        if (this.Q.length == 0) {
            console.log("underflow")
            return
        }        
        return this.Q[0]
    }

    enqueue(x) {
        if (this.Q.length == this.max_size) {
            console.log("overflow")
            return
        }
        this.Q.push(x)
    }

    dequeue() {
        if (this.Q.length == 0) {
            console.log("underflow")
            return
        }
        return this.Q.shift()
    }
}

var q = new Q(5)
