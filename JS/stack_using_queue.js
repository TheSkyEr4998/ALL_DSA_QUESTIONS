class Queue {
    constructor() {
        this.q = new Array(50005)
        this.f = 0
        this.r = 0
    }
    
    is_empty() {
        return this.f == this.r
    }
    
    get_front() {
        if (this.f == this.r) {
            return '-'
        }
        return this.q[this.f]
    }
    
    eq(x) {
        this.q[this.r] = x
        this.r++
    }
    
    dq() {
        var temp = this.q[this.f]
        this.f++
        
        if (this.f == this.r) {
            this.f = 0
            this.r = 0
        }
        
        return temp
    }
}

class Stack {
    constructor() {
        this.q1 = new Queue()
        this.q2 = new Queue()
    }

    pop() {
        return this.q1.dq()
    }

    push(x) {
        this.q2.eq(x)

        while(!this.q1.is_empty()) {
            this.q2.eq(this.q1.dq())
        }

        var temp = this.q1
        this.q1 = this.q2
        this.q2 = temp
    }

    peek() {
        return this.q1.get_front()
    }
}