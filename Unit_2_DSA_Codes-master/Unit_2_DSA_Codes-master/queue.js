class Queue {
    constructor (size) {
        this.Q = new Array(size)
        this.max_size = size
        this.front = 0
        this.rear = 0
    }

    get_front() {
        if (this.front == this.rear) {
            console.log("underflow")
            return
        }
        return this.Q[this.front]
    }

    enqueue(x) {
        if (this.rear == this.max_size) {
            console.log("overflow")
            return
        }
        this.Q[this.rear] = x
        this.rear++
    }

    dequeue() {
        if (this.front == this.rear) {
            console.log("underflow")
            return
        }
        var x = this.Q[this.front]
        this.front++
        if (this.front == this.rear) {
            this.front = 0
            this.rear = 0
        }
        return x
    }
}