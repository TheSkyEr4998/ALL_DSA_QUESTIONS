class Queue {
    constructor()
    {
        this.S1 = []
        this.S2 = []
    }
    push(value) {
    	//write your code here..
    	while (!this.S1.length == 0) {
    	    this.S2.push(this.S1[this.S1.length - 1])
    	    this.S1.pop()
    	}
    	this.S1.push(value)
    	while(!this.S2.length == 0) {
    	    this.S1.push(this.S2[this.S2.length - 1])
    	    this.S2.pop()
    	}
    }
    pop() {
     	//write your code here..
     	this.S1.pop()
    }
    front() {
    	//write your code here..
    	return this.S1[this.S1.length - 1]
    }
    isEmpty() {
    	//write your code here..
    	return this.S1.length == 0
    }
}